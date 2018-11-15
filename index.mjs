import componentA from './componentA'
import componentB from './componentB'

import debug from './debug'

// Set debug params
console.log('Setting module-level params to new values')
debug.setUser('user1')
debug.setEnvironment('env1')

// Call the components, both of which import debug but do _not_ set the params
console.log('Accessing module-level params via "import ..." in several different files')
componentA.render()
componentB.render()

// Change the params
console.log('Resetting module-level params')
debug.setUser('user2')
debug.setEnvironment('env2')

// Call the components again, noting that the params have been changed for them as well
console.log('Accessing module-level params via "import ..." in several different files')
componentA.render()
componentB.render()
