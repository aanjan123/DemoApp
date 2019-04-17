import WService from './helper/WService'
var wservice = new WService();

export const getPosts = () => {
    return new Promise((resolve, reject) => {
        wservice.getPosts()
            .then(({ statusCode, body }) => {

                resolve(body)

            })
            .catch(reject)
    });
}
