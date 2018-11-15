const Debug = function () {
  this.user = null
  this.environment = null
}

Debug.prototype.setUser = function (user) { this.user = user }
Debug.prototype.setEnvironment = function (environment) { this.environment = environment }
Debug.prototype.printMe = function () { console.log(`User: ${this.user}, Env: ${this.environment}`) }

const debug = new Debug()

export default debug
