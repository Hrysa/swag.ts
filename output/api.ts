/* eslint-disable */
import { $get, $post, $delete, $put } from './adapter';

interface A {}
interface B {}

type array = Array<any>;
type binary = any;
type byte = number;
type date = Date;
type dateTime = Date;
type double = number;
type float = number;
type integer = number;
type long = number;
type password = string;

export namespace SPN {
  export namespace Create {
    export const Post = (body: SPN): Promise<Response$Empty> => {
      return $post('/SPN/create', { body }) as any;
    };
  }
  export namespace Delete {
    export const Post = (query: SPNDeletePost): Promise<Response$Empty> => {
      return $post('/SPN/delete', { query }) as any;
    };
  }
  export namespace DeleteBatch {
    export const Post = (body: array): Promise<Response$Empty> => {
      return $post('/SPN/deleteBatch', { body }) as any;
    };
  }
  export namespace Export {
    export const Post = (body: SPNQueryPageRequestBody): Promise<string> => {
      return $post('/SPN/export', { body }) as any;
    };
  }
  export namespace Import {
    export const Post = (query: SPNImportPost): Promise<Response$Empty> => {
      return $post('/SPN/import', { query }) as any;
    };
  }
  export namespace QueryPage {
    export const Post = (
      body: SPNQueryPageRequestBody,
    ): Promise<Response$IPage$SPN> => {
      return $post('/SPN/queryPage', { body }) as any;
    };
  }
  export namespace Update {
    export const Post = (body: SPN): Promise<Response$Empty> => {
      return $post('/SPN/update', { body }) as any;
    };
  }
}
export namespace Add {
  /**
   * 添加信息
   */
  export const Post = (query: AddPost): Promise<string> => {
    return $post('/add', { query }) as any;
  };
}
export namespace Dealer {
  export namespace Create {
    /**
     * 创建经销商
     */
    export const Post = (body: DealerAddModel): Promise<Response$string> => {
      return $post('/dealer/create', { body }) as any;
    };
  }
  export namespace DeleteBatch {
    /**
     * 批量删除经销商
     */
    export const Post = (body: array): Promise<Response$string> => {
      return $post('/dealer/deleteBatch', { body }) as any;
    };
  }
  export namespace ExportDealer {
    /**
     * 导出
     */
    export const Post = (body: DealerQueryModel): Promise<any> => {
      return $post('/dealer/exportDealer', { body }) as any;
    };
  }
  export namespace ImportDealer {
    /**
     * 导入
     */
    export const Post = (body: string): Promise<Response$string> => {
      return $post('/dealer/importDealer', { body }) as any;
    };
  }
  export namespace QueryDetail {
    /**
     * 查询单个详情
     */
    export const Post = (body: integer): Promise<Response$Dealer> => {
      return $post('/dealer/queryDetail', { body }) as any;
    };
  }
  export namespace QueryPage {
    /**
     * 分页查询
     */
    export const Post = (
      body: DealerQueryModel,
    ): Promise<Response$IPage$Dealer> => {
      return $post('/dealer/queryPage', { body }) as any;
    };
  }
  export namespace Update {
    /**
     * 创建经销商
     */
    export const Post = (body: DealerUpdateModel): Promise<Response$string> => {
      return $post('/dealer/update', { body }) as any;
    };
  }
}
export namespace Get {
  /**
   * 获取信息
   */
  export const Get = (query: GetGet): Promise<string> => {
    return $get('/get', { query }) as any;
  };
}
export namespace Login {
  export namespace Captcha {
    export namespace Email {
      export const Post = (body: EmailBody): Promise<object> => {
        return $post('/login/captcha/email', { body }) as any;
      };
    }
    export namespace Sms {
      export const Post = (body: SmsBody): Promise<object> => {
        return $post('/login/captcha/sms', { body }) as any;
      };
    }
  }
  export namespace Login {
    /**
     * 账号密码登录
     */
    export const Post = (body: LoginBody): Promise<object> => {
      return $post('/login/login', { body }) as any;
    };
  }
  export namespace Password {
    export namespace Email {
      export const Post = (body: EmailPasswordBody): Promise<object> => {
        return $post('/login/password/email', { body }) as any;
      };
    }
    export namespace Sms {
      export const Post = (body: SmsPasswordBody): Promise<object> => {
        return $post('/login/password/sms', { body }) as any;
      };
    }
  }
}
export namespace Materia {
  export namespace Create {
    /**
     * 创建物料清单
     */
    export const Post = (body: MateriaAddModel): Promise<Response$Empty> => {
      return $post('/materia/create', { body }) as any;
    };
  }
  export namespace DeleteBatch {
    /**
     * 批量删除物料清单
     */
    export const Post = (body: array): Promise<Response$Empty> => {
      return $post('/materia/deleteBatch', { body }) as any;
    };
  }
  export namespace ExportMateria {
    /**
     * 导出
     */
    export const Post = (query: MateriaExportMateriaPost): Promise<any> => {
      return $post('/materia/exportMateria', { query }) as any;
    };
  }
  export namespace ImportMateria {
    /**
     * 导入
     */
    export const Post = (body: string): Promise<Response$Empty> => {
      return $post('/materia/importMateria', { body }) as any;
    };
  }
  export namespace QueryDetail {
    /**
     * 查询单个详情
     */
    export const Post = (body: integer): Promise<Response$Materia> => {
      return $post('/materia/queryDetail', { body }) as any;
    };
  }
  export namespace QueryPage {
    /**
     * 分页查询
     */
    export const Post = (
      body: MateriaQueryModel,
    ): Promise<Response$IPage$Materia> => {
      return $post('/materia/queryPage', { body }) as any;
    };
  }
  export namespace Update {
    /**
     * 修改物料清单
     */
    export const Post = (body: MateriaUpdateModel): Promise<Response$Empty> => {
      return $post('/materia/update', { body }) as any;
    };
  }
}
export namespace Mms {
  export namespace AddMaintenanceMan {
    export const Post = (body: MmsBody): Promise<object> => {
      return $post('/mms/addMaintenanceMan', { body }) as any;
    };
  }
  export namespace DeleteMaintenanceMen {
    export const Post = (body: DeleteBody): Promise<object> => {
      return $post('/mms/deleteMaintenanceMen', { body }) as any;
    };
  }
  export namespace EditMaintenanceMan {
    export const Post = (body: MmsBody): Promise<object> => {
      return $post('/mms/editMaintenanceMan', { body }) as any;
    };
  }
  export namespace GetMaintenanceMan {
    export const Post = (body: DetailBody): Promise<object> => {
      return $post('/mms/getMaintenanceMan', { body }) as any;
    };
  }
  export namespace GetMaintenanceMen {
    export const Post = (body: MmsSearchBody): Promise<object> => {
      return $post('/mms/getMaintenanceMen', { body }) as any;
    };
  }
}
export namespace Pms {
  export namespace Resources {
    export namespace GetPermissions {
      export const Post = (): Promise<object> => {
        return $post('/pms/resources/getPermissions', {}) as any;
      };
    }
  }
}
export namespace Product {
  export namespace BindProductDealer {
    /**
     * 绑定经销商
     */
    export const Post = (body: string): Promise<Response$Empty> => {
      return $post('/product/bindProductDealer', { body }) as any;
    };
  }
  export namespace BindProductTem {
    /**
     * 绑定终端
     */
    export const Post = (body: string): Promise<Response$Empty> => {
      return $post('/product/bindProductTem', { body }) as any;
    };
  }
  export namespace Create {
    /**
     * 创建产品
     */
    export const Post = (body: ProductAddModel): Promise<Response$Empty> => {
      return $post('/product/create', { body }) as any;
    };
  }
  export namespace DeleteProductBatch {
    /**
     * 批量删除产品
     */
    export const Post = (body: array): Promise<Response$Empty> => {
      return $post('/product/deleteProductBatch', { body }) as any;
    };
  }
  export namespace ExportProduct {
    /**
     * 导出
     */
    export const Post = (body: ProductQueryModel): Promise<any> => {
      return $post('/product/exportProduct', { body }) as any;
    };
  }
  export namespace ImportProduct {
    /**
     * 导入
     */
    export const Post = (body: string): Promise<Response$Empty> => {
      return $post('/product/importProduct', { body }) as any;
    };
  }
  export namespace QueryDetail {
    /**
     * 查询单个详情
     */
    export const Post = (body: integer): Promise<Response$Materia> => {
      return $post('/product/queryDetail', { body }) as any;
    };
  }
  export namespace QueryPage {
    /**
     * 分页查询
     */
    export const Post = (
      body: ProductQueryModel,
    ): Promise<Response$IPage$Materia> => {
      return $post('/product/queryPage', { body }) as any;
    };
  }
  export namespace Update {
    /**
     * 修改产品
     */
    export const Post = (body: ProductUpdateModel): Promise<Response$Empty> => {
      return $post('/product/update', { body }) as any;
    };
  }
}
export namespace Rms {
  export namespace AddRole {
    export const Post = (body: RmsBody): Promise<object> => {
      return $post('/rms/addRole', { body }) as any;
    };
  }
  export namespace DelRoles {
    export const Post = (body: DeleteBody): Promise<object> => {
      return $post('/rms/delRoles', { body }) as any;
    };
  }
  export namespace EditRole {
    export const Post = (body: RmsBody): Promise<object> => {
      return $post('/rms/editRole', { body }) as any;
    };
  }
  export namespace GetRole {
    export const Post = (body: DetailBody): Promise<object> => {
      return $post('/rms/getRole', { body }) as any;
    };
  }
  export namespace GetRoles {
    export const Post = (body: RmsSearchBody): Promise<object> => {
      return $post('/rms/getRoles', { body }) as any;
    };
  }
}
export namespace SettlementPrice {
  export namespace Create {
    /**
     * 创建结算价目
     */
    export const Post = (
      body: SettlementPriceAddModel,
    ): Promise<Response$string> => {
      return $post('/settlementPrice/create', { body }) as any;
    };
  }
  export namespace DeleteBatch {
    /**
     * 批量删除结算价目
     */
    export const Post = (body: array): Promise<Response$Empty> => {
      return $post('/settlementPrice/deleteBatch', { body }) as any;
    };
  }
  export namespace ExportSettlementPrice {
    /**
     * 导出
     */
    export const Post = (body: SettlementPriceQueryModel): Promise<any> => {
      return $post('/settlementPrice/exportSettlementPrice', { body }) as any;
    };
  }
  export namespace ImportSettlementPrice {
    /**
     * 导入
     */
    export const Post = (body: string): Promise<Response$Empty> => {
      return $post('/settlementPrice/importSettlementPrice', { body }) as any;
    };
  }
  export namespace QueryDetail {
    /**
     * 查询单个详情
     */
    export const Post = (body: integer): Promise<Response$SettlementPrice> => {
      return $post('/settlementPrice/queryDetail', { body }) as any;
    };
  }
  export namespace QueryPage {
    /**
     * 分页查询
     */
    export const Post = (
      body: SettlementPriceQueryModel,
    ): Promise<Response$IPage$SettlementPrice> => {
      return $post('/settlementPrice/queryPage', { body }) as any;
    };
  }
  export namespace Update {
    /**
     * 修改结算价目
     */
    export const Post = (
      body: SettlementPriceUpdateModel,
    ): Promise<Response$Empty> => {
      return $post('/settlementPrice/update', { body }) as any;
    };
  }
}
export namespace Terminal {
  export namespace Create {
    export const Post = (body: Terminal): Promise<Response$Empty> => {
      return $post('/terminal/create', { body }) as any;
    };
  }
  export namespace Delete {
    export const Post = (
      query: TerminalDeletePost,
    ): Promise<Response$Empty> => {
      return $post('/terminal/delete', { query }) as any;
    };
  }
  export namespace DeleteBatch {
    export const Post = (
      query: TerminalDeleteBatchPost,
    ): Promise<Response$Empty> => {
      return $post('/terminal/deleteBatch', { query }) as any;
    };
  }
  export namespace Export {
    export const Post = (
      body: TerminalQueryPageRequestBody,
    ): Promise<string> => {
      return $post('/terminal/export', { body }) as any;
    };
  }
  export namespace Import {
    export const Post = (
      query: TerminalImportPost,
    ): Promise<Response$Empty> => {
      return $post('/terminal/import', { query }) as any;
    };
  }
  export namespace QueryPage {
    export const Post = (
      body: TerminalQueryPageRequestBody,
    ): Promise<Response$IPage$Terminal> => {
      return $post('/terminal/queryPage', { body }) as any;
    };
  }
  export namespace Update {
    export const Post = (body: Terminal): Promise<Response$Empty> => {
      return $post('/terminal/update', { body }) as any;
    };
  }
}
export namespace Test {
  export const Get = (): Promise<string> => {
    return $get('/test', {}) as any;
  };
}
export namespace Ums {
  export namespace AddUser {
    export const Post = (body: UmsBody): Promise<object> => {
      return $post('/ums/addUser', { body }) as any;
    };
  }
  export namespace DelUsers {
    export const Post = (body: DeleteBody): Promise<object> => {
      return $post('/ums/delUsers', { body }) as any;
    };
  }
  export namespace EditUser {
    export const Post = (body: UmsBody): Promise<object> => {
      return $post('/ums/editUser', { body }) as any;
    };
  }
  export namespace GetUser {
    export const Post = (body: DetailBody): Promise<object> => {
      return $post('/ums/getUser', { body }) as any;
    };
  }
  export namespace GetUsers {
    export const Post = (body: UmsSearchBody): Promise<object> => {
      return $post('/ums/getUsers', { body }) as any;
    };
  }
}
export namespace Vehicle {
  export namespace Component {
    export namespace Create {
      export const Post = (body: VehicleComponent): Promise<Response$Empty> => {
        return $post('/vehicle/component/create', { body }) as any;
      };
    }
    export namespace Delete {
      export const Post = (
        query: VehicleComponentDeletePost,
      ): Promise<Response$Empty> => {
        return $post('/vehicle/component/delete', { query }) as any;
      };
    }
    export namespace DeleteBatch {
      export const Post = (
        query: VehicleComponentDeleteBatchPost,
      ): Promise<Response$Empty> => {
        return $post('/vehicle/component/deleteBatch', { query }) as any;
      };
    }
    export namespace Export {
      export const Post = (
        body: VehicleComponentQueryPageRequestBody,
      ): Promise<string> => {
        return $post('/vehicle/component/export', { body }) as any;
      };
    }
    export namespace Import {
      export const Post = (
        query: VehicleComponentImportPost,
      ): Promise<Response$Empty> => {
        return $post('/vehicle/component/import', { query }) as any;
      };
    }
    export namespace QueryPage {
      export const Post = (
        body: VehicleComponentQueryPageRequestBody,
      ): Promise<Response$IPage$VehicleComponent> => {
        return $post('/vehicle/component/queryPage', { body }) as any;
      };
    }
    export namespace Type {
      export namespace Create {
        export const Post = (
          body: VehicleComponentType,
        ): Promise<Response$Empty> => {
          return $post('/vehicle/component/type/create', { body }) as any;
        };
      }
      export namespace Delete {
        export const Post = (
          query: VehicleComponentTypeDeletePost,
        ): Promise<Response$Empty> => {
          return $post('/vehicle/component/type/delete', { query }) as any;
        };
      }
      export namespace DeleteBatch {
        export const Post = (
          query: VehicleComponentTypeDeleteBatchPost,
        ): Promise<Response$Empty> => {
          return $post('/vehicle/component/type/deleteBatch', { query }) as any;
        };
      }
      export namespace QueryPage {
        export const Post = (
          body: BaseDto,
        ): Promise<Response$IPage$VehicleComponentType> => {
          return $post('/vehicle/component/type/queryPage', { body }) as any;
        };
      }
      export namespace Update {
        export const Post = (
          body: VehicleComponentType,
        ): Promise<Response$Empty> => {
          return $post('/vehicle/component/type/update', { body }) as any;
        };
      }
    }
    export namespace Update {
      export const Post = (body: VehicleComponent): Promise<Response$Empty> => {
        return $post('/vehicle/component/update', { body }) as any;
      };
    }
  }
  export namespace Create {
    export const Post = (body: Vehicle): Promise<Response$Empty> => {
      return $post('/vehicle/create', { body }) as any;
    };
  }
  export namespace Delete {
    export const Post = (query: VehicleDeletePost): Promise<Response$Empty> => {
      return $post('/vehicle/delete', { query }) as any;
    };
  }
  export namespace DeleteBatch {
    export const Post = (
      query: VehicleDeleteBatchPost,
    ): Promise<Response$Empty> => {
      return $post('/vehicle/deleteBatch', { query }) as any;
    };
  }
  export namespace Fault {
    export namespace Create {
      export const Post = (body: VehicleFault): Promise<Response$Empty> => {
        return $post('/vehicle/fault/create', { body }) as any;
      };
    }
    export namespace Delete {
      export const Post = (
        query: VehicleFaultDeletePost,
      ): Promise<Response$Empty> => {
        return $post('/vehicle/fault/delete', { query }) as any;
      };
    }
    export namespace DeleteBatch {
      export const Post = (
        query: VehicleFaultDeleteBatchPost,
      ): Promise<Response$Empty> => {
        return $post('/vehicle/fault/deleteBatch', { query }) as any;
      };
    }
    export namespace Export {
      export const Post = (
        body: VehicleFaultQueryPageRequestBody,
      ): Promise<string> => {
        return $post('/vehicle/fault/export', { body }) as any;
      };
    }
    export namespace Import {
      export const Post = (
        query: VehicleFaultImportPost,
      ): Promise<Response$Empty> => {
        return $post('/vehicle/fault/import', { query }) as any;
      };
    }
    export namespace QueryPage {
      export const Post = (
        body: VehicleFaultQueryPageRequestBody,
      ): Promise<Response$IPage$VehicleFault> => {
        return $post('/vehicle/fault/queryPage', { body }) as any;
      };
    }
    export namespace Update {
      export const Post = (body: VehicleFault): Promise<Response$Empty> => {
        return $post('/vehicle/fault/update', { body }) as any;
      };
    }
  }
  export namespace QueryPage {
    export const Post = (
      body: VehicleQueryPageRequestBody,
    ): Promise<Response$IPage$Vehicle> => {
      return $post('/vehicle/queryPage', { body }) as any;
    };
  }
  export namespace Type {
    export namespace Create {
      export const Post = (body: VehicleType): Promise<Response$Empty> => {
        return $post('/vehicle/type/create', { body }) as any;
      };
    }
    export namespace Delete {
      export const Post = (
        query: VehicleTypeDeletePost,
      ): Promise<Response$Empty> => {
        return $post('/vehicle/type/delete', { query }) as any;
      };
    }
    export namespace DeleteBatch {
      export const Post = (
        query: VehicleTypeDeleteBatchPost,
      ): Promise<Response$Empty> => {
        return $post('/vehicle/type/deleteBatch', { query }) as any;
      };
    }
    export namespace QueryPage {
      export const Post = (
        body: VehicleTypeQueryPageRequestBody,
      ): Promise<Response$IPage$VehicleType> => {
        return $post('/vehicle/type/queryPage', { body }) as any;
      };
    }
    export namespace Update {
      export const Post = (body: VehicleType): Promise<Response$Empty> => {
        return $post('/vehicle/type/update', { body }) as any;
      };
    }
  }
  export namespace Update {
    export const Post = (body: Vehicle): Promise<Response$Empty> => {
      return $post('/vehicle/update', { body }) as any;
    };
  }
}
export namespace WorkHours {
  export namespace Create {
    /**
     * 创建工时
     */
    export const Post = (body: WorkHoursAddModel): Promise<Response$Empty> => {
      return $post('/workHours/create', { body }) as any;
    };
  }
  export namespace DeleteBatch {
    /**
     * 批量删除工时
     */
    export const Post = (body: array): Promise<Response$Empty> => {
      return $post('/workHours/deleteBatch', { body }) as any;
    };
  }
  export namespace ExportworkHours {
    /**
     * 导出
     */
    export const Post = (body: WorkHoursQueryModel): Promise<any> => {
      return $post('/workHours/exportworkHours', { body }) as any;
    };
  }
  export namespace ImportworkHours {
    /**
     * 导入
     */
    export const Post = (body: string): Promise<Response$Empty> => {
      return $post('/workHours/importworkHours', { body }) as any;
    };
  }
  export namespace QueryDetail {
    /**
     * 查询单个详情
     */
    export const Post = (body: integer): Promise<Response$WorkHours> => {
      return $post('/workHours/queryDetail', { body }) as any;
    };
  }
  export namespace QueryPage {
    /**
     * 分页查询
     */
    export const Post = (
      body: WorkHoursQueryModel,
    ): Promise<Response$IPage$WorkHours> => {
      return $post('/workHours/queryPage', { body }) as any;
    };
  }
  export namespace Update {
    /**
     * 修改工时
     */
    export const Post = (
      body: WorkHoursUpdateModel,
    ): Promise<Response$Empty> => {
      return $post('/workHours/update', { body }) as any;
    };
  }
}

/** query */
interface SPNDeletePost {
  code: string;
}
/** query */
interface SPNImportPost {
  url: string;
}
/** query */
interface AddPost {
  name: string;
}
/** query */
interface GetGet {
  name: string;
  sex: integer;
}
/** query */
interface MateriaExportMateriaPost {
  toPage: integer;
  pageSize: integer;
  materialCode: string;
  productName: string;
  spec: string;
  remark: string;
}
/** query */
interface TerminalDeletePost {
  no: string;
}
/** query */
interface TerminalDeleteBatchPost {
  no: array;
}
/** query */
interface TerminalImportPost {
  url: string;
}
/** query */
interface VehicleComponentDeletePost {
  id: string;
}
/** query */
interface VehicleComponentDeleteBatchPost {
  id: array;
}
/** query */
interface VehicleComponentImportPost {
  url: string;
}
/** query */
interface VehicleComponentTypeDeletePost {
  name: string;
}
/** query */
interface VehicleComponentTypeDeleteBatchPost {
  name: array;
}
/** query */
interface VehicleDeletePost {
  no: string;
}
/** query */
interface VehicleDeleteBatchPost {
  no: array;
}
/** query */
interface VehicleFaultDeletePost {
  id: string;
}
/** query */
interface VehicleFaultDeleteBatchPost {
  id: array;
}
/** query */
interface VehicleFaultImportPost {
  url: string;
}
/** query */
interface VehicleTypeDeletePost {
  name: string;
}
/** query */
interface VehicleTypeDeleteBatchPost {
  name: array;
}
interface BaseDto {
  /**  */
  pageSize: integer;
  /**  */
  toPage: integer;
}
interface Dealer {
  /**  */
  activated: boolean;
  /**  */
  address: string;
  /**  */
  addressId: integer;
  /**  */
  areaCode: string;
  /**  */
  country: string;
  /**  */
  createdAt: string;
  /**  */
  createdBy: integer;
  /**  */
  dealerName: string;
  /**  */
  dealerNo: string;
  /**  */
  director: string;
  /**  */
  enabled: boolean;
  /**  */
  fstArea: string;
  /**  */
  id: integer;
  /**  */
  intlAreaCode: integer;
  /**  */
  lat: number;
  /**  */
  lon: number;
  /**  */
  mail: string;
  /**  */
  remark: string;
  /**  */
  sndArea: string;
  /**  */
  tel: string;
  /**  */
  trdArea: string;
  /**  */
  updatedAt: string;
  /**  */
  updatedBy: integer;
  /**  */
  usccode: string;
}
interface DealerAddModel {
  /** 地址 */
  address: string;
  /** 区域代码 */
  areaCode: string;
  /** 国家 */
  country: string;
  /** 经销商名称 */
  dealerName: string;
  /** 负责人 */
  director: string;
  /** 一级区域 */
  fstArea: string;
  /** 国际电话区号 */
  intlAreaCode: integer;
  /** 纬度 */
  lat: number;
  /** 经度 */
  lon: number;
  /** 邮箱 */
  mail: string;
  /** 备注 */
  remark: string;
  /** 二级区域 */
  sndArea: string;
  /** 电话 */
  tel: string;
  /** 三级区域 */
  trdArea: string;
  /**  */
  usccode: string;
}
interface DealerQueryModel {
  /** 经销商编码 */
  areaCode: string;
  /** 开始添加时间 */
  createBeginTime: string;
  /** 结束添加时间 */
  createEndTime: string;
  /** 经销商编码 */
  dealerCode: string;
  /** 经销商名称 */
  dealerName: string;
  /** 负责人 */
  director: string;
  /** 一级区域 */
  fstArea: string;
  /** 国际电话区号 */
  intlAreaCode: integer;
  /**  */
  pageSize: integer;
  /** 二级区域 */
  sndArea: string;
  /** 电话 */
  tel: string;
  /**  */
  toPage: integer;
}
interface DealerUpdateModel {
  /** 地址 */
  address: string;
  /** 地址id */
  addressId: integer;
  /** 区域代码 */
  areaCode: string;
  /** 国家 */
  country: string;
  /** 经销商名称 */
  dealerName: string;
  /** 经销商编号 */
  dealerNo: string;
  /** 负责人 */
  director: string;
  /** 一级区域 */
  fstArea: string;
  /** 经销商id */
  id: integer;
  /**   国际电话区号 */
  intlAreaCode: integer;
  /** 纬度 */
  lat: number;
  /** 经度 */
  lon: number;
  /** 邮箱 */
  mail: string;
  /** 备注 */
  remark: string;
  /** 二级区域 */
  sndArea: string;
  /** 电话 */
  tel: string;
  /** 三级区域 */
  trdArea: string;
  /**  */
  usccode: string;
}
interface DeleteBody {
  /** 删除ID */
  id: string;
  /** 批量删除IDS */
  ids: Array<any /** unknown */>;
}
interface DetailBody {
  /**  */
  id: string;
}
interface EmailBody {
  /** 邮箱 */
  email: string;
}
interface EmailPasswordBody {
  /** 验证码 */
  captcha: string;
  /** 邮箱 */
  email: string;
  /** 新密码 */
  newPassword: string;
  /** 重复新密码 */
  rePassword: string;
}
interface Empty {}
interface IPage$Dealer {
  /**  */
  current: integer;
  /**  */
  hitCount: boolean;
  /**  */
  pages: integer;
  /**  */
  records: Array<Dealer>;
  /**  */
  searchCount: boolean;
  /**  */
  size: integer;
  /**  */
  total: integer;
}
interface IPage$Materia {
  /**  */
  current: integer;
  /**  */
  hitCount: boolean;
  /**  */
  pages: integer;
  /**  */
  records: Array<Materia>;
  /**  */
  searchCount: boolean;
  /**  */
  size: integer;
  /**  */
  total: integer;
}
interface IPage$SPN {
  /**  */
  current: integer;
  /**  */
  hitCount: boolean;
  /**  */
  pages: integer;
  /**  */
  records: Array<SPN>;
  /**  */
  searchCount: boolean;
  /**  */
  size: integer;
  /**  */
  total: integer;
}
interface IPage$SettlementPrice {
  /**  */
  current: integer;
  /**  */
  hitCount: boolean;
  /**  */
  pages: integer;
  /**  */
  records: Array<SettlementPrice>;
  /**  */
  searchCount: boolean;
  /**  */
  size: integer;
  /**  */
  total: integer;
}
interface IPage$Terminal {
  /**  */
  current: integer;
  /**  */
  hitCount: boolean;
  /**  */
  pages: integer;
  /**  */
  records: Array<Terminal>;
  /**  */
  searchCount: boolean;
  /**  */
  size: integer;
  /**  */
  total: integer;
}
interface IPage$VehicleComponentType {
  /**  */
  current: integer;
  /**  */
  hitCount: boolean;
  /**  */
  pages: integer;
  /**  */
  records: Array<VehicleComponentType>;
  /**  */
  searchCount: boolean;
  /**  */
  size: integer;
  /**  */
  total: integer;
}
interface IPage$VehicleComponent {
  /**  */
  current: integer;
  /**  */
  hitCount: boolean;
  /**  */
  pages: integer;
  /**  */
  records: Array<VehicleComponent>;
  /**  */
  searchCount: boolean;
  /**  */
  size: integer;
  /**  */
  total: integer;
}
interface IPage$VehicleFault {
  /**  */
  current: integer;
  /**  */
  hitCount: boolean;
  /**  */
  pages: integer;
  /**  */
  records: Array<VehicleFault>;
  /**  */
  searchCount: boolean;
  /**  */
  size: integer;
  /**  */
  total: integer;
}
interface IPage$VehicleType {
  /**  */
  current: integer;
  /**  */
  hitCount: boolean;
  /**  */
  pages: integer;
  /**  */
  records: Array<VehicleType>;
  /**  */
  searchCount: boolean;
  /**  */
  size: integer;
  /**  */
  total: integer;
}
interface IPage$Vehicle {
  /**  */
  current: integer;
  /**  */
  hitCount: boolean;
  /**  */
  pages: integer;
  /**  */
  records: Array<Vehicle>;
  /**  */
  searchCount: boolean;
  /**  */
  size: integer;
  /**  */
  total: integer;
}
interface IPage$WorkHours {
  /**  */
  current: integer;
  /**  */
  hitCount: boolean;
  /**  */
  pages: integer;
  /**  */
  records: Array<WorkHours>;
  /**  */
  searchCount: boolean;
  /**  */
  size: integer;
  /**  */
  total: integer;
}
interface LoginBody {
  /** 密码 */
  password: string;
  /** 用户名 */
  username: string;
}
interface Materia {
  /**  */
  id: integer;
  /**  */
  materialCode: string;
  /**  */
  productName: string;
  /**  */
  remark: string;
  /**  */
  spec: string;
}
interface MateriaAddModel {
  /** 物料编号 */
  materialCode: string;
  /** 产品名称 */
  productName: string;
  /** 备注 */
  remark: string;
  /** 规格型号 */
  spec: string;
}
interface MateriaQueryModel {
  /** 物料编号 */
  materialCode: string;
  /**  */
  pageSize: integer;
  /** 产品名称 */
  productName: string;
  /** 备注 */
  remark: string;
  /** 规格型号 */
  spec: string;
  /**  */
  toPage: integer;
}
interface MateriaUpdateModel {
  /** id */
  id: integer;
  /** 物料编号 */
  materialCode: string;
  /** 产品名称 */
  productName: string;
  /** 备注 */
  remark: string;
  /** 规格型号 */
  spec: string;
}
interface MmsBody {
  /**  */
  addressId: integer;
  /**  */
  avatar: string;
  /**  */
  dealerId: integer;
  /**  */
  dealerName: string;
  /**  */
  email: string;
  /**  */
  gender: string;
  /**  */
  identity: string;
  /**  */
  name: string;
  /**  */
  organization: string;
  /**  */
  ownerDealerId: integer;
  /**  */
  ownerDealerName: string;
  /**  */
  password: string;
  /**  */
  phoneNumber: string;
  /**  */
  phonePrefix: string;
  /**  */
  remark: string;
  /**  */
  roleId: integer;
  /**  */
  roleName: string;
  /**  */
  username: string;
}
interface MmsSearchBody {
  /**  */
  address: string;
  /**  */
  carTypes: Array<any /** unknown */>;
  /**  */
  country: string;
  /**  */
  dealer: string;
  /**  */
  firstArea: string;
  /**  */
  gender: integer;
  /**  */
  identity: string;
  /**  */
  name: string;
  /**  */
  page: integer;
  /**  */
  phone: string;
  /**  */
  size: integer;
}
interface ProductAddModel {
  /** 履带厂家 */
  caterpillarBandFactory: string;
  /** 履带型号 */
  caterpillarBandModel: string;
  /** 履带编号 */
  caterpillarBandNo: string;
  /** 经销商ID */
  dealerId: integer;
  /** 发动机厂家 */
  engineFactory: string;
  /** 发动机型号 */
  engineModel: string;
  /** 发动机编号 */
  engineNo: string;
  /** 车架号 */
  frameNum: string;
  /** 前后轮胎钢圈 */
  frontBackRim: string;
  /** 前后轮胎 */
  frontBackTyre: string;
  /**  */
  hstfactory: string;
  /**  */
  hstno: string;
  /** 车牌号 */
  licensePlateNum: string;
  /** 生产日期 */
  manufacturingDate: string;
  /** 物料编码 */
  materialCode: string;
  /** 产品名称 */
  productName: string;
  /** 出厂日期 */
  productionDate: string;
  /** 购机用户姓名 */
  purchaser: string;
  /** 购机用户地址 */
  purchaserAddress: string;
  /** 购机用户证件号码 */
  purchaserCertNo: string;
  /** 购机用户国家 */
  purchaserCountry: string;
  /** 购机用户姓名所属经销商 */
  purchaserDealer: string;
  /** 购机用户一级区域 */
  purchaserFstArea: string;
  /** 购买人国际电话区号 */
  purchaserIntlAreaCode: integer;
  /** 购买人备注 */
  purchaserRemark: string;
  /** 购机用户二级区域 */
  purchaserSndArea: string;
  /** 购机用户电话 */
  purchaserTel: string;
  /** 购机用户三级区域 */
  purchaserTrdArea: string;
  /** 购机用户类型 */
  purchaserType: string;
  /** 备注 */
  remark: string;
  /** 售出日期 */
  sellDate: string;
  /** 出厂编号 */
  serialNo: string;
  /** 规格型号 */
  spec: string;
  /** 终端编号 */
  terminalNo: string;
  /** 变速器厂家 */
  transmissionFactory: string;
  /** 变速器编号 */
  transmissionNo: string;
  /** 轮胎 */
  tyre: string;
  /** 购机用户姓名 */
  tyreNo: string;
  /** 有效标志 */
  validTag: string;
  /** 机具高低 */
  vehicleComponentHeight: string;
  /** 机具名称 */
  vehicleComponentName: string;
  /** 机具识别码 */
  vehicleComponentNo: string;
  /** 机具类型名称 */
  vehicleComponentTypeId: integer;
  /** 机具宽度 */
  vehicleComponentWidth: string;
  /** 机型 */
  vehicleTypeId: integer;
  /** 车辆宽幅 */
  vehicleWidth: number;
}
interface ProductQueryModel {
  /** 国家 */
  country: string;
  /** 经销商ID */
  dealerId: integer;
  /** 发动机编号 */
  engineNo: string;
  /** 终端绑定状态 */
  isBindTerminal: string;
  /** 售出日期上限 */
  sellBeginDate: string;
  /** 售出日期下限 */
  sellEndDate: string;
  /** 出厂编号 */
  serialNo: string;
  /** 终端编号 */
  terminalNo: string;
  /** 机型 */
  vehicletype: string;
}
interface ProductUpdateModel {
  /** 履带厂家 */
  caterpillarBandFactory: string;
  /** 履带型号 */
  caterpillarBandModel: string;
  /** 履带编号 */
  caterpillarBandNo: string;
  /** 经销商地址 */
  dealerAddress: string;
  /** 经销商国家 */
  dealerCountry: string;
  /** 经销商负责人 */
  dealerDirector: string;
  /** 经销商ID */
  dealerId: integer;
  /** 经销商编号 */
  dealerNo: string;
  /** 经销商电话 */
  dealerTel: string;
  /** 发动机厂家 */
  engineFactory: string;
  /** 发动机型号 */
  engineModel: string;
  /** 发动机编号 */
  engineNo: string;
  /** 车架号 */
  frameNum: string;
  /** 前后轮胎钢圈 */
  frontBackRim: string;
  /** 前后轮胎 */
  frontBackTyre: string;
  /**  */
  hstfactory: string;
  /**  */
  hstno: string;
  /** id */
  id: integer;
  /** 车牌号 */
  licensePlateNum: string;
  /** 生产日期 */
  manufacturingDate: string;
  /** 物料编码 */
  materialCode: string;
  /** 产品名称 */
  productName: string;
  /** 出厂日期 */
  productionDate: string;
  /** 购机用户姓名 */
  purchaser: string;
  /** 购买人地址信息 */
  purchaserAddressId: integer;
  /** 购机用户证件号码 */
  purchaserCertNo: string;
  /** 购机用户姓名所属经销商 */
  purchaserDealer: string;
  /** 购买人国际电话区号 */
  purchaserIntlAreaCode: integer;
  /** 购买人备注 */
  purchaserRemark: string;
  /** 购机用户电话 */
  purchaserTel: string;
  /** 购机用户类型 */
  purchaserType: string;
  /** 备注 */
  remark: string;
  /** 售出日期 */
  sellDate: string;
  /** 出厂编号 */
  serialNo: string;
  /** 规格型号 */
  spec: string;
  /** 终端到期时间 */
  terminalExpiresIn: string;
  /** 终端型号 */
  terminalModel: string;
  /** 终端编号 */
  terminalNo: string;
  /** 终端sim卡号 */
  terminalSim: string;
  /** 终端类型 */
  terminalType: string;
  /** 变速器厂家 */
  transmissionFactory: string;
  /** 变速器编号 */
  transmissionNo: string;
  /** 轮胎 */
  tyre: string;
  /** 购机用户姓名 */
  tyreNo: string;
  /** 有效标志 */
  validTag: string;
  /** 机具高低 */
  vehicleComponentHeight: string;
  /** 机具名称 */
  vehicleComponentName: string;
  /** 机具识别码 */
  vehicleComponentNo: string;
  /** 机具类型名称 */
  vehicleComponentTypeId: integer;
  /** 机具类型名称 */
  vehicleComponentTypeName: string;
  /** 机具宽度 */
  vehicleComponentWidth: string;
  /** 机型 */
  vehicleTypeId: integer;
  /** 车辆宽幅 */
  vehicleWidth: number;
}
interface Response$Dealer {
  /** code */
  code: integer;
  /** data */
  data: Dealer;
  /** message */
  message: string;
  /** success */
  success: boolean;
}
interface Response$Empty {
  /** code */
  code: integer;
  /** data */
  data: Empty;
  /** message */
  message: string;
  /** success */
  success: boolean;
}
interface Response$IPage$Dealer {
  /** code */
  code: integer;
  /** data */
  data: IPage$Dealer;
  /** message */
  message: string;
  /** success */
  success: boolean;
}
interface Response$IPage$Materia {
  /** code */
  code: integer;
  /** data */
  data: IPage$Materia;
  /** message */
  message: string;
  /** success */
  success: boolean;
}
interface Response$IPage$SPN {
  /** code */
  code: integer;
  /** data */
  data: IPage$SPN;
  /** message */
  message: string;
  /** success */
  success: boolean;
}
interface Response$IPage$SettlementPrice {
  /** code */
  code: integer;
  /** data */
  data: IPage$SettlementPrice;
  /** message */
  message: string;
  /** success */
  success: boolean;
}
interface Response$IPage$Terminal {
  /** code */
  code: integer;
  /** data */
  data: IPage$Terminal;
  /** message */
  message: string;
  /** success */
  success: boolean;
}
interface Response$IPage$VehicleComponentType {
  /** code */
  code: integer;
  /** data */
  data: IPage$VehicleComponentType;
  /** message */
  message: string;
  /** success */
  success: boolean;
}
interface Response$IPage$VehicleComponent {
  /** code */
  code: integer;
  /** data */
  data: IPage$VehicleComponent;
  /** message */
  message: string;
  /** success */
  success: boolean;
}
interface Response$IPage$VehicleFault {
  /** code */
  code: integer;
  /** data */
  data: IPage$VehicleFault;
  /** message */
  message: string;
  /** success */
  success: boolean;
}
interface Response$IPage$VehicleType {
  /** code */
  code: integer;
  /** data */
  data: IPage$VehicleType;
  /** message */
  message: string;
  /** success */
  success: boolean;
}
interface Response$IPage$Vehicle {
  /** code */
  code: integer;
  /** data */
  data: IPage$Vehicle;
  /** message */
  message: string;
  /** success */
  success: boolean;
}
interface Response$IPage$WorkHours {
  /** code */
  code: integer;
  /** data */
  data: IPage$WorkHours;
  /** message */
  message: string;
  /** success */
  success: boolean;
}
interface Response$Materia {
  /** code */
  code: integer;
  /** data */
  data: Materia;
  /** message */
  message: string;
  /** success */
  success: boolean;
}
interface Response$SettlementPrice {
  /** code */
  code: integer;
  /** data */
  data: SettlementPrice;
  /** message */
  message: string;
  /** success */
  success: boolean;
}
interface Response$WorkHours {
  /** code */
  code: integer;
  /** data */
  data: WorkHours;
  /** message */
  message: string;
  /** success */
  success: boolean;
}
interface Response$string {
  /** code */
  code: integer;
  /** data */
  data: string;
  /** message */
  message: string;
  /** success */
  success: boolean;
}
interface RmsBody {
  /**  */
  id: string;
  /**  */
  name: string;
  /**  */
  permissions: string;
  /**  */
  remark: string;
}
interface RmsSearchBody {
  /**  */
  keyword: string;
  /**  */
  page: integer;
  /**  */
  size: integer;
}
interface SPN {
  /** 故障spn码 */
  code: string;
  /** 故障描述 */
  desc: string;
}
interface SPNQueryPageRequestBody {
  /** 故障SPN码 */
  code: string;
  /** 故障描述 */
  desc: string;
  /**  */
  pageSize: integer;
  /**  */
  toPage: integer;
}
interface SettlementPrice {
  /**  */
  activated: boolean;
  /**  */
  areaType: integer;
  /**  */
  createdAt: string;
  /**  */
  createdBy: integer;
  /**  */
  dealerId: integer;
  /**  */
  dealerLevel: integer;
  /**  */
  dealerLevelName: string;
  /**  */
  dealerName: string;
  /**  */
  enabled: boolean;
  /**  */
  id: integer;
  /**  */
  mileageValue: number;
  /**  */
  remark: string;
  /**  */
  updatedAt: string;
  /**  */
  updatedBy: integer;
  /**  */
  vehicleTypeId: integer;
  /**  */
  vehicleTypeName: string;
  /**  */
  workHoursValue: number;
}
interface SettlementPriceAddModel {
  /** 区域 */
  areaType: integer;
  /** 经销商ID */
  dealerId: integer;
  /** 经销商等级 */
  dealerLevel: integer;
  /** 里程标准 */
  mileageValue: number;
  /** 备注 */
  remark: string;
  /** 车型ID */
  vehicleTypeId: integer;
  /** 工时标准 */
  workHoursValue: number;
}
interface SettlementPriceQueryModel {
  /** 区域 */
  areaType: integer;
  /** 经销商ID */
  dealerId: integer;
  /** 经销商等级 */
  dealerLevel: integer;
  /** 车型ID */
  vehicleTypeId: integer;
}
interface SettlementPriceUpdateModel {
  /** 工时标准 */
  areaType: number;
  /** 经销商ID */
  dealerId: integer;
  /** 经销商等级 */
  dealerLevel: integer;
  /** id */
  id: integer;
  /** 里程标准 */
  mileageValue: number;
  /** 备注 */
  remark: string;
  /** 车型ID */
  vehicleTypeId: integer;
}
interface SmsBody {
  /** 手机号 */
  phone: string;
  /** 国家代码 */
  prefix: string;
}
interface SmsPasswordBody {
  /** 验证码 */
  captcha: string;
  /** 新密码 */
  newPassword: string;
  /** 手机号 */
  phone: string;
  /** 重复新密码 */
  rePassword: string;
}
interface Terminal {
  /** 绑定状态 */
  bindStatus: integer;
  /** varchar(512) */
  comment: string;
  /** create_at */
  createAt: string;
  /** 到期时间 */
  expiresIn: string;
  /** 生产厂家 */
  factory: string;
  /** 终端型号 */
  model: string;
  /** 终端编号 */
  no: string;
  /** 通信协议 */
  protocol: string;
  /** sim卡号 */
  sim: string;
  /** 终端类型 */
  type: string;
  /** update_at */
  updateAt: string;
}
interface TerminalQueryPageRequestBody {
  /** 绑定状态 */
  bindStatus: integer;
  /** 到期时间结束时间 */
  endTime: string;
  /** 生产厂家 */
  factory: string;
  /** 终端型号 */
  model: string;
  /** 终端编号 */
  no: string;
  /**  */
  pageSize: integer;
  /** 到期时间开始时间 */
  startTime: string;
  /**  */
  toPage: integer;
}
interface UmsBody {
  /**  */
  avatar: string;
  /**  */
  dealerId: integer;
  /**  */
  dealerName: string;
  /**  */
  email: string;
  /**  */
  name: string;
  /**  */
  organization: string;
  /**  */
  password: string;
  /**  */
  phoneNumber: string;
  /**  */
  phonePrefix: string;
  /**  */
  remark: string;
  /**  */
  roleId: integer;
  /**  */
  roleName: string;
  /**  */
  username: string;
}
interface UmsSearchBody {
  /**  */
  endTime: string;
  /**  */
  name: string;
  /**  */
  page: integer;
  /**  */
  phone: string;
  /**  */
  roleName: string;
  /**  */
  size: integer;
  /**  */
  startTime: string;
  /**  */
  status: integer;
  /**  */
  username: string;
}
interface Vehicle {
  /** 绑定状态 */
  bindStatus: boolean;
  /** 生产日期 */
  birthday: string;
  /** 购买时间 */
  boughtAt: string;
  /** 所属经销商 */
  buyerDealerId: integer;
  /** 身份证号 */
  buyerId: string;
  /** 购机用户 */
  buyerName: string;
  /** 用户电话 */
  buyerPhone: string;
  /** 号码国家前缀 */
  buyerPhonePrefix: integer;
  /** 发动机型号 */
  engineModel: string;
  /** 车牌号 */
  license: string;
  /** name */
  name: string;
  /** 出厂编号 */
  no: string;
  /** 车辆功率 */
  power: string;
  /** 有效标志 */
  sign: string;
  /** 终端编号 */
  terminalNo: string;
  /** 车辆类型id */
  type: integer;
  /** 车架号 */
  vin: string;
  /** 车辆宽幅 */
  wideWidth: string;
}
interface VehicleComponent {
  /** varchar(512) */
  comment: string;
  /** 机具高度 */
  height: string;
  /** 机具识别码 */
  id: string;
  /** 机具名称 */
  name: string;
  /** 机具类型id */
  type: integer;
  /** 机具高度 */
  width: string;
}
interface VehicleComponentQueryPageRequestBody {
  /** 机具识别码 */
  id: string;
  /** 机具名称 */
  name: string;
  /**  */
  pageSize: integer;
  /**  */
  toPage: integer;
}
interface VehicleComponentType {
  /** 该机具类型的极具数量 */
  count: integer;
  /** 机具类型名称 */
  name: string;
}
interface VehicleFault {
  /** 类别 */
  category: string;
  /** 备注 */
  comment: string;
  /** 车辆部位 */
  component: string;
  /** 故障描述 */
  desc: string;
  /** id */
  id: integer;
  /** 机型 */
  type: integer;
}
interface VehicleFaultQueryPageRequestBody {
  /** 类别 */
  category: string;
  /** 备注 */
  comment: string;
  /** 车辆部位 */
  component: string;
  /** 故障描述 */
  desc: string;
  /**  */
  pageSize: integer;
  /**  */
  toPage: integer;
  /** 机型 */
  type: integer;
}
interface VehicleQueryPageRequestBody {
  /** 绑定状态 */
  bindStatus: boolean;
  /** 所属经销商 */
  buyerDealerId: integer;
  /** 身份证号 */
  buyerId: string;
  /** 购机用户 */
  buyerName: string;
  /** 购机时间结束时间 */
  endTime: string;
  /** 发动机型号 */
  engineModel: string;
  /**  */
  pageSize: integer;
  /** 购机时间开始时间 */
  startTime: string;
  /** 终端编号 */
  terminalNo: string;
  /**  */
  toPage: integer;
  /** 车架号 */
  vin: string;
}
interface VehicleType {
  /** enable */
  enable: boolean;
  /** mini_offline_icon */
  miniOfflineIcon: string;
  /** mini_online_icon */
  miniOnlineIcon: string;
  /** 车辆类型名称 */
  name: string;
  /** offline_icon */
  offlineIcon: string;
  /** online_icon */
  onlineIcon: string;
  /** 车型照片 */
  snapshot: string;
}
interface VehicleTypeQueryPageRequestBody {
  /**  */
  pageSize: integer;
  /**  */
  toPage: integer;
}
interface WorkHours {
  /**  */
  activated: boolean;
  /**  */
  createdAt: string;
  /**  */
  createdBy: integer;
  /**  */
  description: string;
  /**  */
  enabled: boolean;
  /**  */
  id: integer;
  /**  */
  num: number;
  /**  */
  parts: string;
  /**  */
  remark: string;
  /**  */
  updatedAt: string;
  /**  */
  updatedBy: integer;
  /**  */
  vehicleTypeId: integer;
  /**  */
  vehicleTypeName: string;
}
interface WorkHoursAddModel {
  /** 工时描述 */
  description: string;
  /** 工时数量 */
  num: number;
  /** 部位 */
  parts: string;
  /** 备注 */
  remark: string;
  /** 机型 */
  vehicleTypeId: integer;
}
interface WorkHoursQueryModel {
  /** 工时描述 */
  description: string;
  /**  */
  pageSize: integer;
  /** 部位 */
  parts: string;
  /**  */
  toPage: integer;
  /** 机型 */
  vehicleTypeId: integer;
}
interface WorkHoursUpdateModel {
  /** 工时描述 */
  description: string;
  /** id */
  id: integer;
  /** 工时数量 */
  num: number;
  /** 部位 */
  parts: string;
  /** 备注 */
  remark: string;
  /** 机型 */
  vehicleTypeId: integer;
}
