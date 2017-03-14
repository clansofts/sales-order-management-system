export class CreditCard {
  CreditCardID: number;
  CardType: string;
  CardNumber: string;
  ExpMonth: number;
  ExpYear: number;
  ModifiedDate: string;
};


export class ShipMethod {
  ShipMethodID: number;
  ShipBase: number;
  ShipRate: number;
  rowguid: string;
  ModifiedDate: string;
};


export class Territory {
  TerritoryID: number;
  Name: string;
  CountryRegionCode: string;
  Group: string;
  SalesYTD: number;
  SalesLastYear: number;
  CostYTD: number;
  CostLastYear: number;
  rowguid: string;
  ModifiedDate: string;
};

export class Currency {
  CurrencyCode: string;
  Name: string;
  ModifiedDate: string;
};




