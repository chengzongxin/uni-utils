
export default class UniUtils {
    name: string;
    version: string;

    constructor() {
        this.name = 'utils'
        this.version = '1.0.0'
    }

    test(): void {
        console.log('utils test 123')
    }
}