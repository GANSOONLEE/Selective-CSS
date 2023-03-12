// ModuleError 類繼承自 Error 類
class ModuleError extends Error {
    public readonly module: string;
    public readonly errorCode: string;

    // 自定義錯誤信息模板
    constructor(module: string, message: string, errorCode: string) {
        super(`${module} ${message} (${errorCode})`);
        this.module = module;
        this.errorCode = errorCode;
        this.name = 'Selective CSS';
    }

    // 將方法打包成一個公有函數 log()
    public log() {
        const [moduleName, message, code] = this.message.split(' ', 3);
        console.error(`Error in module: ${moduleName} ${message} ${code}`);
    }

    // 將 handleModuleError(e: Error) 聲明為靜態公有函數
    public static handleModuleError(e: Error) {
        // 將檢查錯誤是不是屬於 ModuleError 的，是的話調用 log() 方法
        if (e instanceof ModuleError) {
            e.log();
        } else {
            console.error(`Unknown error occurred: ${e.message}`);
        }
    }
}

// 实例化
// try {
//     throw new ModuleError('TimeZone', '模塊丟失！', '100');
// } catch (e) {

//     if (e instanceof ModuleError) {
//         ModuleError.handleModuleError(e);
//     }
// }
