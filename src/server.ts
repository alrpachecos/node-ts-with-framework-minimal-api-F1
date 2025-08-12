import Fastify from "fastify";
import cors from "@fastify/cors";
interface IDriverParam {
    id: string;
}

const server = Fastify({ logger: true });

server.register(cors, {
    origin: "*",
})

const teams = [
    {id: 1, name: "Ferrari", base: "Maranello - Italy"},
    {id: 2, name: "Mercedes", base: "Brackley - United Kingdom"},
    {id: 3, name: "Red bull Racing", base: "Milton Keynes - United Kingdom"}
];

const drivers = [
    {id: 1, name: "Max Verstappen", team: "Red Bull Racing"},
    {id: 2, name: "Lewis Hamilton", team: "Ferrari"},
    {id: 3, name: "Lando Norris", team: "Mercedes"},
]

server.get("/teams", async (request, response) => {
    response.type("application/json").code(200);
    return { teams };
});

server.get("/drivers", async (request, response) => {
    response.type("application/json").code(200);
    return { drivers };
});

server.get<{Params: IDriverParam}>("/drivers/:id", async (request, response) => {
    const id = parseInt(request.params.id);
    const driverById = drivers.find(driver => driver.id === id);

    if(!driverById) {
        response.type("application/json").code(404);
        return { message: "Driver Not Found"}
    }

    response.type("application/json").code(200);
    return { driverById };
})

server.listen({ port: 3333}, () => {
    console.log("Server iniciado com sucesso!");
});