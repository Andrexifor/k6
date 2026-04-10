import { check } from "k6"
import http from "k6/http"

export const options = {
  vus: 20,
  duration: "20s",
  thresholds: {
    http_req_duration: ["avg<200"]
  }
}

export default function () {
  let response = http.get("https://api.escuelajs.co/api/v1/products/1")

  check(response, {
    "Duration is less than 500ms": (r) => r.status === 200
  })
}