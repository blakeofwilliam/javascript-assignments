export default class Util {
    static getArgs() {
        return process.argv.reduce((sum, arg) => {
            if (arg.startsWith("-")) {
                sum[arg.replace(/-+/, '')] = true;
            }

            return sum;
        }, {});
    }
}