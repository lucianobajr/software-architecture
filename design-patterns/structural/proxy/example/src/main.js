var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// Serviço real que realiza a operação de busca de dados
var RealDataService = /** @class */ (function () {
    function RealDataService() {
    }
    RealDataService.prototype.fetchData = function (key) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    // Simula uma operação demorada
                    return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 1000); })];
                    case 1:
                        // Simula uma operação demorada
                        _a.sent();
                        return [2 /*return*/, "Dados para ".concat(key)];
                }
            });
        });
    };
    return RealDataService;
}());
// Proxy que adiciona caching ao serviço real
var CachingProxy = /** @class */ (function () {
    function CachingProxy(realService) {
        this.cache = {};
        this.realService = realService;
    }
    CachingProxy.prototype.fetchData = function (key) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.cache[key]) {
                            console.log("Dados obtidos do cache para ".concat(key));
                            return [2 /*return*/, this.cache[key]];
                        }
                        return [4 /*yield*/, this.realService.fetchData(key)];
                    case 1:
                        data = _a.sent();
                        this.cache[key] = data;
                        console.log("Dados obtidos do servi\u00E7o real para ".concat(key, " e armazenados em cache"));
                        return [2 /*return*/, data];
                }
            });
        });
    };
    return CachingProxy;
}());
// Uso do Proxy
var realDataService = new RealDataService();
var proxy = new CachingProxy(realDataService);
proxy.fetchData("chave1"); // Dados obtidos do serviço real para chave1 e armazenados em cache
proxy.fetchData("chave1"); // Dados obtidos do cache para chave1
proxy.fetchData("chave2"); // Dados obtidos do serviço real para chave2 e armazenados em cache
proxy.fetchData("chave2"); // Dados obtidos do cache para chave2
