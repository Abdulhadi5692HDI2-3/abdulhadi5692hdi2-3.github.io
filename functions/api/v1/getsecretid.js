class SecretException {
    constructor(str) {
        return new Response("Exception while trying to get Secret.\nError: " + str);
    }
}
export function getSecretId(id) {
    switch (id) {
        case '1': {
            return new Response("Hello this is a test note. Thanks for read bye bye!");
        }
        case '2': {
            return new Response("saturday or sunday?");
        }
        default: {
            return new SecretException("Secret with ID:" + id + " doesn't exist!");
        }
    }
}