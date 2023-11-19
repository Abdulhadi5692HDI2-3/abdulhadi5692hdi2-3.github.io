import {getSecretId} from "../api/v1/[getSecretId]";
export function onRequest(ctx) {
    let res = 'Secret #' + ctx.params.secret + '\nData:\n' + getSecretId(null, ctx.params.secret);

    return new Response(res);
}