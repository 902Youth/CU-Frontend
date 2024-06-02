import cyber from '../Images/badge-cyber.png'
import finance from '../Images/badge-finance.png'
import hr from '../Images/badge-HR.png'
import it from '../Images/badge-IT.png'
import marketing from '../Images/badge-marketing.png'
import ops from '../Images/badge-ops.png'
import product from '../Images/badge-product.png'

const Icons = {
  cyber, finance, hr, it, marketing, ops, product
};

export type IconTypes = keyof typeof Icons;

export default Icons;
