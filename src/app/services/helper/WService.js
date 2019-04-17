import { Config } from '@common'
import NetworkHelper from './NetworkHelper'

function WService() {
    this.url = Config.endPoint;
}

WService.prototype.makeUrl = function (resource, params = null) {
    var url = this.url + resource
    if (params) {
        url += "&" + params
    }
    return url
}

WService.prototype.getPosts = function () {
    return NetworkHelper.requestGet(this.makeUrl("posts"))
}

module.exports = WService
