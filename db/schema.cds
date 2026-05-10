namespace sap.react.app;

using {managed} from '@sap/cds/common';

entity Books : managed {
    key ID     : UUID;
        title  : String(255) @mandatory;
        author : String(255) @mandatory;
        stock  : Integer;
        price  : Decimal(10, 2);

}
