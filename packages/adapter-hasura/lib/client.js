export class HasuraClientError extends Error {
    constructor(errors, query, variables) {
        super(errors.map((error) => error.message).join("\n"));
        this.name = "HasuraClientError";
        console.error({ query, variables });
    }
}
export function client({ adminSecret, endpoint }) {
    if (!adminSecret)
        throw new TypeError("Hasura client error: Please provide an adminSecret");
    if (!endpoint)
        throw new TypeError("Hasura client error: Please provide a graphql endpoint");
    return {
        async run(query, variables) {
            const response = await fetch(endpoint, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "x-hasura-admin-secret": adminSecret,
                },
                body: JSON.stringify({ query, variables }),
            });
            const { data = {}, errors } = await response.json();
            if (errors?.length)
                throw new HasuraClientError(errors, query, variables);
            return data;
        },
    };
}
