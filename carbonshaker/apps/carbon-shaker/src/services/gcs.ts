import axios from "axios";

export const instance = axios.create({
    baseURL: "http://localhost:8888/",
});

const {
    get
} = instance;

export const getClusterInfo = () =>
    get("/cluster");

export const createPods = () =>
    get("/createPods");

export const removePods = () =>
    get("/removePods");

export const randomScale = () =>
    get("/randomScale");

export const gaugeScale = () =>
    get("/gaugeScale");

export const rteScale = () =>
    get("/rteScale");