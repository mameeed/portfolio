const DEFAULT_BASE_URL = "https://api.mameed.com";

class HttpError extends Error {
    constructor(message, {status, data} = {}) {
        super(message || "Request failed");
        this.name = "HttpError";
        this.status = status;
        this.data = data;
    }
}

const isAbsoluteUrl = (url) => /^https?:\/\//i.test(url);

async function parseResponseBody(response) {
    const contentType = response.headers.get("content-type") || "";

    if (contentType.includes("application/json")) {
        try {
            return await response.json();
        } catch (error) {
            // Some APIs respond with an empty body but a JSON content-type.
            return null;
        }
    }

    // Fall back to text for other mime types; ignore empty bodies.
    const text = await response.text();
    return text || null;
}

async function request(path, {method = "GET", baseUrl = DEFAULT_BASE_URL, headers, body, ...options} = {}) {
    const requestUrl = isAbsoluteUrl(path) ? path : `${baseUrl}${path.startsWith("/") ? "" : "/"}${path}`;

    const requestHeaders = new Headers({
        Accept: "application/json, text/plain, */*",
        ...headers,
    });

    let requestBody = body;
    if (body && !(body instanceof FormData)) {
        requestBody = JSON.stringify(body);
        if (!requestHeaders.has("Content-Type")) {
            requestHeaders.set("Content-Type", "application/json");
        }
    }

    const response = await fetch(requestUrl, {
        method,
        headers: requestHeaders,
        body: requestBody,
        ...options,
    });

    const payload = await parseResponseBody(response);

    if (!response.ok) {
        const errorMessage = (payload && payload.message) || payload || response.statusText;
        throw new HttpError(errorMessage, {
            status: response.status,
            data: payload,
        });
    }

    return payload;
}

function get(path, options) {
    return request(path, {
        ...options,
        method: "GET",
    });
}

function post(path, body, options) {
    return request(path, {
        ...options,
        method: "POST",
        body,
    });
}

function put(path, body, options) {
    return request(path, {
        ...options,
        method: "PUT",
        body,
    });
}

function del(path, options) {
    return request(path, {
        ...options,
        method: "DELETE",
    });
}

export default {
    request,
    get,
    post,
    put,
    delete: del,
    HttpError,
};

export {request, get, post, put, del as delete, HttpError};
