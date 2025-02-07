import { Router } from "express";
import { listUsers } from "../services/user.js";

const router = Router();

router.get('/', async (req, res) => {
    const userList = await listUsers()
    res.send(userList)
})

router.post('/', (req, res) => {
    res.send("route post");

})

router.delete('/', (req, res) => {
    res.send("route delete");
})

router.put('/', (req, res) => {
    res.send("route put");
})


export default router;