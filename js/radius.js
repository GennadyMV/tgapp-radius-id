//
// Definitions for schema: DatumNode
//  http://tgapp/DatumNode/DatumNode.svc?wsdl&entity=start.start_ip.radius#types2
//
//
// Simple type (enumeration) {DatumNode}DbOperation
//
// - Open
// - ExecuteScalar
// - ExecuteNonQuery
// - ExecuteBatch
// - ExecuteQuery
//
// Simple type (enumeration) {DatumNode}DbTransaction
//
// - None
// - Begin
// - Commit
// - Rollback
// - BeginLocal
//
// Constructor for XML Schema item {DatumNode}MetaCommand
//
function DN_MetaCommand () {
    this.typeMarker = 'DN_MetaCommand';
    this._Operation = null;
    this._Options = null;
    this._Behavior = null;
    this._Transaction = null;
    this._Timeout = null;
    this._ReaderTimeout = null;
    this._StartRecord = null;
    this._MaxRecordsPerCall = null;
    this._MaxRecords = null;
}

//
// accessor is DN_MetaCommand.prototype.getOperation
// element get for Operation
// - element type is {DatumNode}DbOperation
// - optional element
//
// element set for Operation
// setter function is is DN_MetaCommand.prototype.setOperation
//
function DN_MetaCommand_getOperation() { return this._Operation;}

DN_MetaCommand.prototype.getOperation = DN_MetaCommand_getOperation;

function DN_MetaCommand_setOperation(value) { this._Operation = value;}

DN_MetaCommand.prototype.setOperation = DN_MetaCommand_setOperation;
//
// accessor is DN_MetaCommand.prototype.getOptions
// element get for Options
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for Options
// setter function is is DN_MetaCommand.prototype.setOptions
//
function DN_MetaCommand_getOptions() { return this._Options;}

DN_MetaCommand.prototype.getOptions = DN_MetaCommand_getOptions;

function DN_MetaCommand_setOptions(value) { this._Options = value;}

DN_MetaCommand.prototype.setOptions = DN_MetaCommand_setOptions;
//
// accessor is DN_MetaCommand.prototype.getBehavior
// element get for Behavior
// - element type is {DatumNode}DbBehavior
// - optional element
//
// element set for Behavior
// setter function is is DN_MetaCommand.prototype.setBehavior
//
function DN_MetaCommand_getBehavior() { return this._Behavior;}

DN_MetaCommand.prototype.getBehavior = DN_MetaCommand_getBehavior;

function DN_MetaCommand_setBehavior(value) { this._Behavior = value;}

DN_MetaCommand.prototype.setBehavior = DN_MetaCommand_setBehavior;
//
// accessor is DN_MetaCommand.prototype.getTransaction
// element get for Transaction
// - element type is {DatumNode}DbTransaction
// - optional element
//
// element set for Transaction
// setter function is is DN_MetaCommand.prototype.setTransaction
//
function DN_MetaCommand_getTransaction() { return this._Transaction;}

DN_MetaCommand.prototype.getTransaction = DN_MetaCommand_getTransaction;

function DN_MetaCommand_setTransaction(value) { this._Transaction = value;}

DN_MetaCommand.prototype.setTransaction = DN_MetaCommand_setTransaction;
//
// accessor is DN_MetaCommand.prototype.getTimeout
// element get for Timeout
// - element type is {http://www.w3.org/2001/XMLSchema}int
// - optional element
//
// element set for Timeout
// setter function is is DN_MetaCommand.prototype.setTimeout
//
function DN_MetaCommand_getTimeout() { return this._Timeout;}

DN_MetaCommand.prototype.getTimeout = DN_MetaCommand_getTimeout;

function DN_MetaCommand_setTimeout(value) { this._Timeout = value;}

DN_MetaCommand.prototype.setTimeout = DN_MetaCommand_setTimeout;
//
// accessor is DN_MetaCommand.prototype.getReaderTimeout
// element get for ReaderTimeout
// - element type is {http://www.w3.org/2001/XMLSchema}int
// - optional element
//
// element set for ReaderTimeout
// setter function is is DN_MetaCommand.prototype.setReaderTimeout
//
function DN_MetaCommand_getReaderTimeout() { return this._ReaderTimeout;}

DN_MetaCommand.prototype.getReaderTimeout = DN_MetaCommand_getReaderTimeout;

function DN_MetaCommand_setReaderTimeout(value) { this._ReaderTimeout = value;}

DN_MetaCommand.prototype.setReaderTimeout = DN_MetaCommand_setReaderTimeout;
//
// accessor is DN_MetaCommand.prototype.getStartRecord
// element get for StartRecord
// - element type is {http://www.w3.org/2001/XMLSchema}int
// - optional element
//
// element set for StartRecord
// setter function is is DN_MetaCommand.prototype.setStartRecord
//
function DN_MetaCommand_getStartRecord() { return this._StartRecord;}

DN_MetaCommand.prototype.getStartRecord = DN_MetaCommand_getStartRecord;

function DN_MetaCommand_setStartRecord(value) { this._StartRecord = value;}

DN_MetaCommand.prototype.setStartRecord = DN_MetaCommand_setStartRecord;
//
// accessor is DN_MetaCommand.prototype.getMaxRecordsPerCall
// element get for MaxRecordsPerCall
// - element type is {http://www.w3.org/2001/XMLSchema}int
// - optional element
//
// element set for MaxRecordsPerCall
// setter function is is DN_MetaCommand.prototype.setMaxRecordsPerCall
//
function DN_MetaCommand_getMaxRecordsPerCall() { return this._MaxRecordsPerCall;}

DN_MetaCommand.prototype.getMaxRecordsPerCall = DN_MetaCommand_getMaxRecordsPerCall;

function DN_MetaCommand_setMaxRecordsPerCall(value) { this._MaxRecordsPerCall = value;}

DN_MetaCommand.prototype.setMaxRecordsPerCall = DN_MetaCommand_setMaxRecordsPerCall;
//
// accessor is DN_MetaCommand.prototype.getMaxRecords
// element get for MaxRecords
// - element type is {http://www.w3.org/2001/XMLSchema}int
// - optional element
//
// element set for MaxRecords
// setter function is is DN_MetaCommand.prototype.setMaxRecords
//
function DN_MetaCommand_getMaxRecords() { return this._MaxRecords;}

DN_MetaCommand.prototype.getMaxRecords = DN_MetaCommand_getMaxRecords;

function DN_MetaCommand_setMaxRecords(value) { this._MaxRecords = value;}

DN_MetaCommand.prototype.setMaxRecords = DN_MetaCommand_setMaxRecords;
//
// Serialize {DatumNode}MetaCommand
//
function DN_MetaCommand_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'DatumNode\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._Operation != null) {
      xml = xml + '<jns0:Operation>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._Operation);
      xml = xml + '</jns0:Operation>';
     }
    }
    // block for local variables
    {
     if (this._Options != null) {
      xml = xml + '<jns0:Options>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._Options);
      xml = xml + '</jns0:Options>';
     }
    }
    // block for local variables
    {
     if (this._Behavior != null) {
      xml = xml + '<jns0:Behavior>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._Behavior);
      xml = xml + '</jns0:Behavior>';
     }
    }
    // block for local variables
    {
     if (this._Transaction != null) {
      xml = xml + '<jns0:Transaction>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._Transaction);
      xml = xml + '</jns0:Transaction>';
     }
    }
    // block for local variables
    {
     if (this._Timeout != null) {
      xml = xml + '<jns0:Timeout>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._Timeout);
      xml = xml + '</jns0:Timeout>';
     }
    }
    // block for local variables
    {
     if (this._ReaderTimeout != null) {
      xml = xml + '<jns0:ReaderTimeout>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._ReaderTimeout);
      xml = xml + '</jns0:ReaderTimeout>';
     }
    }
    // block for local variables
    {
     if (this._StartRecord != null) {
      xml = xml + '<jns0:StartRecord>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._StartRecord);
      xml = xml + '</jns0:StartRecord>';
     }
    }
    // block for local variables
    {
     if (this._MaxRecordsPerCall != null) {
      xml = xml + '<jns0:MaxRecordsPerCall>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._MaxRecordsPerCall);
      xml = xml + '</jns0:MaxRecordsPerCall>';
     }
    }
    // block for local variables
    {
     if (this._MaxRecords != null) {
      xml = xml + '<jns0:MaxRecords>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._MaxRecords);
      xml = xml + '</jns0:MaxRecords>';
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

DN_MetaCommand.prototype.serialize = DN_MetaCommand_serialize;

function DN_MetaCommand_deserialize (cxfjsutils, element) {
    var newobject = new DN_MetaCommand();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Operation');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'DatumNode', 'Operation')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setOperation(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Options');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'DatumNode', 'Options')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setOptions(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Behavior');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'DatumNode', 'Behavior')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setBehavior(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Transaction');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'DatumNode', 'Transaction')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setTransaction(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Timeout');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'DatumNode', 'Timeout')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = parseInt(value);
     }
     newobject.setTimeout(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing ReaderTimeout');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'DatumNode', 'ReaderTimeout')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = parseInt(value);
     }
     newobject.setReaderTimeout(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing StartRecord');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'DatumNode', 'StartRecord')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = parseInt(value);
     }
     newobject.setStartRecord(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing MaxRecordsPerCall');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'DatumNode', 'MaxRecordsPerCall')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = parseInt(value);
     }
     newobject.setMaxRecordsPerCall(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing MaxRecords');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'DatumNode', 'MaxRecords')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = parseInt(value);
     }
     newobject.setMaxRecords(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {DatumNode}DbResult
//
function DN_DbResult () {
    this.typeMarker = 'DN_DbResult';
    this._Id = 0;
    this._HasRows = '';
    this._State = '';
    this._Value = null;
}

//
// accessor is DN_DbResult.prototype.getId
// element get for Id
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
//
// element set for Id
// setter function is is DN_DbResult.prototype.setId
//
function DN_DbResult_getId() { return this._Id;}

DN_DbResult.prototype.getId = DN_DbResult_getId;

function DN_DbResult_setId(value) { this._Id = value;}

DN_DbResult.prototype.setId = DN_DbResult_setId;
//
// accessor is DN_DbResult.prototype.getHasRows
// element get for HasRows
// - element type is {http://www.w3.org/2001/XMLSchema}boolean
// - required element
//
// element set for HasRows
// setter function is is DN_DbResult.prototype.setHasRows
//
function DN_DbResult_getHasRows() { return this._HasRows;}

DN_DbResult.prototype.getHasRows = DN_DbResult_getHasRows;

function DN_DbResult_setHasRows(value) { this._HasRows = value;}

DN_DbResult.prototype.setHasRows = DN_DbResult_setHasRows;
//
// accessor is DN_DbResult.prototype.getState
// element get for State
// - element type is {DatumNode}DbState
// - required element
//
// element set for State
// setter function is is DN_DbResult.prototype.setState
//
function DN_DbResult_getState() { return this._State;}

DN_DbResult.prototype.getState = DN_DbResult_getState;

function DN_DbResult_setState(value) { this._State = value;}

DN_DbResult.prototype.setState = DN_DbResult_setState;
//
// accessor is DN_DbResult.prototype.getValue
// element get for Value
// - optional element
//
// element set for Value
// setter function is is DN_DbResult.prototype.setValue
//
function DN_DbResult_getValue() { return this._Value;}

DN_DbResult.prototype.getValue = DN_DbResult_getValue;

function DN_DbResult_setValue(value) { this._Value = value;}

DN_DbResult.prototype.setValue = DN_DbResult_setValue;
//
// Serialize {DatumNode}DbResult
//
function DN_DbResult_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'DatumNode\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:Id>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._Id);
     xml = xml + '</jns0:Id>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:HasRows>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._HasRows);
     xml = xml + '</jns0:HasRows>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:State>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._State);
     xml = xml + '</jns0:State>';
    }
    // block for local variables
    {
     if (this._Value != null) {
      var anyHolder = this._Value;
      var anySerializer;
      var typeAttr = '';
      if (anyHolder != null) {
       if (!anyHolder.raw) {
        anySerializer = cxfjsutils.interfaceObject.globalElementSerializers[anyHolder.qname];
       }
       if (anyHolder.xsiType) {
        var typePrefix = 'cxfjst1';
        var typeAttr = 'xmlns:' + typePrefix + '=\'' + anyHolder.namespaceURI + '\'';
        typeAttr = typeAttr + ' xsi:type=\'' + typePrefix + ':' + anyHolder.localName + '\'';
       }
       if (anySerializer) {
        xml = xml + this._Value.serialize(cxfjsutils, 'jns0:Value', typeAttr);
       } else {
        xml = xml + '<jns0:Value ' + typeAttr + '>';
        if (!anyHolder.raw) {
         xml = xml + cxfjsutils.escapeXmlEntities(this._Value);
        } else {
         xml = xml + anyHolder.xml;
        }
        xml = xml + '</jns0:Value>';
       }
      } else {
       xml = xml + '<jns0:Value xsi:nil=\'true\'/>';
      }
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

DN_DbResult.prototype.serialize = DN_DbResult_serialize;

function DN_DbResult_deserialize (cxfjsutils, element) {
    var newobject = new DN_DbResult();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Id');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = parseInt(value);
    }
    newobject.setId(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing HasRows');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = (value == 'true');
    }
    newobject.setHasRows(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing State');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setState(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Value');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'DatumNode', 'Value')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = org_apache_cxf_deserialize_anyType(cxfjsutils, curElement);
     }
     newobject.setValue(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Simple type (enumeration) {DatumNode}IsolationLevel
//
// - Serializable
// - RepeatableRead
// - ReadCommitted
// - ReadUncommitted
// - Snapshot
// - Chaos
// - Unspecified
//
// Constructor for XML Schema item {DatumNode}DbException
//
function DN_DbException () {
    this.typeMarker = 'DN_DbException';
    this._Message = null;
    this._ExtendedErrorMessage = null;
    this._ErrorCode = 0;
}

//
// accessor is DN_DbException.prototype.getMessage
// element get for Message
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for Message
// setter function is is DN_DbException.prototype.setMessage
//
function DN_DbException_getMessage() { return this._Message;}

DN_DbException.prototype.getMessage = DN_DbException_getMessage;

function DN_DbException_setMessage(value) { this._Message = value;}

DN_DbException.prototype.setMessage = DN_DbException_setMessage;
//
// accessor is DN_DbException.prototype.getExtendedErrorMessage
// element get for ExtendedErrorMessage
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for ExtendedErrorMessage
// setter function is is DN_DbException.prototype.setExtendedErrorMessage
//
function DN_DbException_getExtendedErrorMessage() { return this._ExtendedErrorMessage;}

DN_DbException.prototype.getExtendedErrorMessage = DN_DbException_getExtendedErrorMessage;

function DN_DbException_setExtendedErrorMessage(value) { this._ExtendedErrorMessage = value;}

DN_DbException.prototype.setExtendedErrorMessage = DN_DbException_setExtendedErrorMessage;
//
// accessor is DN_DbException.prototype.getErrorCode
// element get for ErrorCode
// - element type is {http://www.w3.org/2001/XMLSchema}int
// - required element
//
// element set for ErrorCode
// setter function is is DN_DbException.prototype.setErrorCode
//
function DN_DbException_getErrorCode() { return this._ErrorCode;}

DN_DbException.prototype.getErrorCode = DN_DbException_getErrorCode;

function DN_DbException_setErrorCode(value) { this._ErrorCode = value;}

DN_DbException.prototype.setErrorCode = DN_DbException_setErrorCode;
//
// Serialize {DatumNode}DbException
//
function DN_DbException_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'DatumNode\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._Message != null) {
      xml = xml + '<jns0:Message>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._Message);
      xml = xml + '</jns0:Message>';
     }
    }
    // block for local variables
    {
     if (this._ExtendedErrorMessage != null) {
      xml = xml + '<jns0:ExtendedErrorMessage>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._ExtendedErrorMessage);
      xml = xml + '</jns0:ExtendedErrorMessage>';
     }
    }
    // block for local variables
    {
     xml = xml + '<jns0:ErrorCode>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._ErrorCode);
     xml = xml + '</jns0:ErrorCode>';
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

DN_DbException.prototype.serialize = DN_DbException_serialize;

function DN_DbException_deserialize (cxfjsutils, element) {
    var newobject = new DN_DbException();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Message');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'DatumNode', 'Message')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setMessage(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing ExtendedErrorMessage');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'DatumNode', 'ExtendedErrorMessage')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setExtendedErrorMessage(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing ErrorCode');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = parseInt(value);
    }
    newobject.setErrorCode(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {DatumNode}MetaConnection
//
function DN_MetaConnection () {
    this.typeMarker = 'DN_MetaConnection';
    this._Provider = null;
    this._Connection = null;
    this._Lifetime = null;
    this._AccessTimeout = null;
    this._IsolationLevel = null;
}

//
// accessor is DN_MetaConnection.prototype.getProvider
// element get for Provider
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for Provider
// setter function is is DN_MetaConnection.prototype.setProvider
//
function DN_MetaConnection_getProvider() { return this._Provider;}

DN_MetaConnection.prototype.getProvider = DN_MetaConnection_getProvider;

function DN_MetaConnection_setProvider(value) { this._Provider = value;}

DN_MetaConnection.prototype.setProvider = DN_MetaConnection_setProvider;
//
// accessor is DN_MetaConnection.prototype.getConnection
// element get for Connection
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for Connection
// setter function is is DN_MetaConnection.prototype.setConnection
//
function DN_MetaConnection_getConnection() { return this._Connection;}

DN_MetaConnection.prototype.getConnection = DN_MetaConnection_getConnection;

function DN_MetaConnection_setConnection(value) { this._Connection = value;}

DN_MetaConnection.prototype.setConnection = DN_MetaConnection_setConnection;
//
// accessor is DN_MetaConnection.prototype.getLifetime
// element get for Lifetime
// - element type is {http://www.w3.org/2001/XMLSchema}int
// - optional element
//
// element set for Lifetime
// setter function is is DN_MetaConnection.prototype.setLifetime
//
function DN_MetaConnection_getLifetime() { return this._Lifetime;}

DN_MetaConnection.prototype.getLifetime = DN_MetaConnection_getLifetime;

function DN_MetaConnection_setLifetime(value) { this._Lifetime = value;}

DN_MetaConnection.prototype.setLifetime = DN_MetaConnection_setLifetime;
//
// accessor is DN_MetaConnection.prototype.getAccessTimeout
// element get for AccessTimeout
// - element type is {http://www.w3.org/2001/XMLSchema}int
// - optional element
//
// element set for AccessTimeout
// setter function is is DN_MetaConnection.prototype.setAccessTimeout
//
function DN_MetaConnection_getAccessTimeout() { return this._AccessTimeout;}

DN_MetaConnection.prototype.getAccessTimeout = DN_MetaConnection_getAccessTimeout;

function DN_MetaConnection_setAccessTimeout(value) { this._AccessTimeout = value;}

DN_MetaConnection.prototype.setAccessTimeout = DN_MetaConnection_setAccessTimeout;
//
// accessor is DN_MetaConnection.prototype.getIsolationLevel
// element get for IsolationLevel
// - element type is {DatumNode}IsolationLevel
// - optional element
//
// element set for IsolationLevel
// setter function is is DN_MetaConnection.prototype.setIsolationLevel
//
function DN_MetaConnection_getIsolationLevel() { return this._IsolationLevel;}

DN_MetaConnection.prototype.getIsolationLevel = DN_MetaConnection_getIsolationLevel;

function DN_MetaConnection_setIsolationLevel(value) { this._IsolationLevel = value;}

DN_MetaConnection.prototype.setIsolationLevel = DN_MetaConnection_setIsolationLevel;
//
// Serialize {DatumNode}MetaConnection
//
function DN_MetaConnection_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'DatumNode\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._Provider != null) {
      xml = xml + '<jns0:Provider>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._Provider);
      xml = xml + '</jns0:Provider>';
     }
    }
    // block for local variables
    {
     if (this._Connection != null) {
      xml = xml + '<jns0:Connection>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._Connection);
      xml = xml + '</jns0:Connection>';
     }
    }
    // block for local variables
    {
     if (this._Lifetime != null) {
      xml = xml + '<jns0:Lifetime>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._Lifetime);
      xml = xml + '</jns0:Lifetime>';
     }
    }
    // block for local variables
    {
     if (this._AccessTimeout != null) {
      xml = xml + '<jns0:AccessTimeout>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._AccessTimeout);
      xml = xml + '</jns0:AccessTimeout>';
     }
    }
    // block for local variables
    {
     if (this._IsolationLevel != null) {
      xml = xml + '<jns0:IsolationLevel>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._IsolationLevel);
      xml = xml + '</jns0:IsolationLevel>';
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

DN_MetaConnection.prototype.serialize = DN_MetaConnection_serialize;

function DN_MetaConnection_deserialize (cxfjsutils, element) {
    var newobject = new DN_MetaConnection();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Provider');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'DatumNode', 'Provider')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setProvider(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Connection');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'DatumNode', 'Connection')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setConnection(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Lifetime');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'DatumNode', 'Lifetime')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = parseInt(value);
     }
     newobject.setLifetime(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing AccessTimeout');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'DatumNode', 'AccessTimeout')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = parseInt(value);
     }
     newobject.setAccessTimeout(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing IsolationLevel');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'DatumNode', 'IsolationLevel')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setIsolationLevel(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Definitions for schema: http://datumnode.com/start/start_ip/radius
//  http://tgapp/DatumNode/DatumNode.svc?wsdl&entity=start.start_ip.radius#types1
//
//
// Constructor for XML Schema item {http://datumnode.com/start/start_ip/radius}Get_Access_SysdateResult
//
function datumnode_com_start_start_ip_radius_Get_Access_SysdateResult () {
    this.typeMarker = 'datumnode_com_start_start_ip_radius_Get_Access_SysdateResult';
    this._Result = null;
    this._Parameters = null;
    this._ResultSet = null;
}

//
// accessor is datumnode_com_start_start_ip_radius_Get_Access_SysdateResult.prototype.getResult
// element get for Result
// - element type is {DatumNode}DbResult
// - optional element
//
// element set for Result
// setter function is is datumnode_com_start_start_ip_radius_Get_Access_SysdateResult.prototype.setResult
//
function datumnode_com_start_start_ip_radius_Get_Access_SysdateResult_getResult() { return this._Result;}

datumnode_com_start_start_ip_radius_Get_Access_SysdateResult.prototype.getResult = datumnode_com_start_start_ip_radius_Get_Access_SysdateResult_getResult;

function datumnode_com_start_start_ip_radius_Get_Access_SysdateResult_setResult(value) { this._Result = value;}

datumnode_com_start_start_ip_radius_Get_Access_SysdateResult.prototype.setResult = datumnode_com_start_start_ip_radius_Get_Access_SysdateResult_setResult;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Access_SysdateResult.prototype.getParameters
// element get for Parameters
// - element type is {http://datumnode.com/start/start_ip/radius}Get_Access_SysdateOutputParameters
// - optional element
//
// element set for Parameters
// setter function is is datumnode_com_start_start_ip_radius_Get_Access_SysdateResult.prototype.setParameters
//
function datumnode_com_start_start_ip_radius_Get_Access_SysdateResult_getParameters() { return this._Parameters;}

datumnode_com_start_start_ip_radius_Get_Access_SysdateResult.prototype.getParameters = datumnode_com_start_start_ip_radius_Get_Access_SysdateResult_getParameters;

function datumnode_com_start_start_ip_radius_Get_Access_SysdateResult_setParameters(value) { this._Parameters = value;}

datumnode_com_start_start_ip_radius_Get_Access_SysdateResult.prototype.setParameters = datumnode_com_start_start_ip_radius_Get_Access_SysdateResult_setParameters;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Access_SysdateResult.prototype.getResultSet
// element get for ResultSet
// - element type is {http://datumnode.com/start/start_ip/radius}ArrayOfGet_Access_SysdateEntity
// - optional element
//
// element set for ResultSet
// setter function is is datumnode_com_start_start_ip_radius_Get_Access_SysdateResult.prototype.setResultSet
//
function datumnode_com_start_start_ip_radius_Get_Access_SysdateResult_getResultSet() { return this._ResultSet;}

datumnode_com_start_start_ip_radius_Get_Access_SysdateResult.prototype.getResultSet = datumnode_com_start_start_ip_radius_Get_Access_SysdateResult_getResultSet;

function datumnode_com_start_start_ip_radius_Get_Access_SysdateResult_setResultSet(value) { this._ResultSet = value;}

datumnode_com_start_start_ip_radius_Get_Access_SysdateResult.prototype.setResultSet = datumnode_com_start_start_ip_radius_Get_Access_SysdateResult_setResultSet;
//
// Serialize {http://datumnode.com/start/start_ip/radius}Get_Access_SysdateResult
//
function datumnode_com_start_start_ip_radius_Get_Access_SysdateResult_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'DatumNode\' xmlns:jns1=\'http://datumnode.com/start/start_ip/radius\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._Result != null) {
      xml = xml + this._Result.serialize(cxfjsutils, 'jns0:Result', null);
     }
    }
    // block for local variables
    {
     if (this._Parameters != null) {
      xml = xml + this._Parameters.serialize(cxfjsutils, 'jns1:Parameters', null);
     }
    }
    // block for local variables
    {
     if (this._ResultSet != null) {
      xml = xml + this._ResultSet.serialize(cxfjsutils, 'jns1:ResultSet', null);
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

datumnode_com_start_start_ip_radius_Get_Access_SysdateResult.prototype.serialize = datumnode_com_start_start_ip_radius_Get_Access_SysdateResult_serialize;

function datumnode_com_start_start_ip_radius_Get_Access_SysdateResult_deserialize (cxfjsutils, element) {
    var newobject = new datumnode_com_start_start_ip_radius_Get_Access_SysdateResult();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Result');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'DatumNode', 'Result')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = DN_DbResult_deserialize(cxfjsutils, curElement);
     }
     newobject.setResult(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Parameters');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'Parameters')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = datumnode_com_start_start_ip_radius_Get_Access_SysdateOutputParameters_deserialize(cxfjsutils, curElement);
     }
     newobject.setParameters(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing ResultSet');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'ResultSet')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = datumnode_com_start_start_ip_radius_ArrayOfGet_Access_SysdateEntity_deserialize(cxfjsutils, curElement);
     }
     newobject.setResultSet(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://datumnode.com/start/start_ip/radius}Stop_Radius_SessionRequest
//
function datumnode_com_start_start_ip_radius_Stop_Radius_SessionRequest () {
    this.typeMarker = 'datumnode_com_start_start_ip_radius_Stop_Radius_SessionRequest';
    this._Id = null;
    this._Connection = null;
    this._Command = null;
    this._Parameters = null;
}

//
// accessor is datumnode_com_start_start_ip_radius_Stop_Radius_SessionRequest.prototype.getId
// element get for Id
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - optional element
//
// element set for Id
// setter function is is datumnode_com_start_start_ip_radius_Stop_Radius_SessionRequest.prototype.setId
//
function datumnode_com_start_start_ip_radius_Stop_Radius_SessionRequest_getId() { return this._Id;}

datumnode_com_start_start_ip_radius_Stop_Radius_SessionRequest.prototype.getId = datumnode_com_start_start_ip_radius_Stop_Radius_SessionRequest_getId;

function datumnode_com_start_start_ip_radius_Stop_Radius_SessionRequest_setId(value) { this._Id = value;}

datumnode_com_start_start_ip_radius_Stop_Radius_SessionRequest.prototype.setId = datumnode_com_start_start_ip_radius_Stop_Radius_SessionRequest_setId;
//
// accessor is datumnode_com_start_start_ip_radius_Stop_Radius_SessionRequest.prototype.getConnection
// element get for Connection
// - element type is {DatumNode}MetaConnection
// - optional element
//
// element set for Connection
// setter function is is datumnode_com_start_start_ip_radius_Stop_Radius_SessionRequest.prototype.setConnection
//
function datumnode_com_start_start_ip_radius_Stop_Radius_SessionRequest_getConnection() { return this._Connection;}

datumnode_com_start_start_ip_radius_Stop_Radius_SessionRequest.prototype.getConnection = datumnode_com_start_start_ip_radius_Stop_Radius_SessionRequest_getConnection;

function datumnode_com_start_start_ip_radius_Stop_Radius_SessionRequest_setConnection(value) { this._Connection = value;}

datumnode_com_start_start_ip_radius_Stop_Radius_SessionRequest.prototype.setConnection = datumnode_com_start_start_ip_radius_Stop_Radius_SessionRequest_setConnection;
//
// accessor is datumnode_com_start_start_ip_radius_Stop_Radius_SessionRequest.prototype.getCommand
// element get for Command
// - element type is {DatumNode}MetaCommand
// - optional element
//
// element set for Command
// setter function is is datumnode_com_start_start_ip_radius_Stop_Radius_SessionRequest.prototype.setCommand
//
function datumnode_com_start_start_ip_radius_Stop_Radius_SessionRequest_getCommand() { return this._Command;}

datumnode_com_start_start_ip_radius_Stop_Radius_SessionRequest.prototype.getCommand = datumnode_com_start_start_ip_radius_Stop_Radius_SessionRequest_getCommand;

function datumnode_com_start_start_ip_radius_Stop_Radius_SessionRequest_setCommand(value) { this._Command = value;}

datumnode_com_start_start_ip_radius_Stop_Radius_SessionRequest.prototype.setCommand = datumnode_com_start_start_ip_radius_Stop_Radius_SessionRequest_setCommand;
//
// accessor is datumnode_com_start_start_ip_radius_Stop_Radius_SessionRequest.prototype.getParameters
// element get for Parameters
// - element type is {http://datumnode.com/start/start_ip/radius}Stop_Radius_SessionInputParameters
// - optional element
//
// element set for Parameters
// setter function is is datumnode_com_start_start_ip_radius_Stop_Radius_SessionRequest.prototype.setParameters
//
function datumnode_com_start_start_ip_radius_Stop_Radius_SessionRequest_getParameters() { return this._Parameters;}

datumnode_com_start_start_ip_radius_Stop_Radius_SessionRequest.prototype.getParameters = datumnode_com_start_start_ip_radius_Stop_Radius_SessionRequest_getParameters;

function datumnode_com_start_start_ip_radius_Stop_Radius_SessionRequest_setParameters(value) { this._Parameters = value;}

datumnode_com_start_start_ip_radius_Stop_Radius_SessionRequest.prototype.setParameters = datumnode_com_start_start_ip_radius_Stop_Radius_SessionRequest_setParameters;
//
// Serialize {http://datumnode.com/start/start_ip/radius}Stop_Radius_SessionRequest
//
function datumnode_com_start_start_ip_radius_Stop_Radius_SessionRequest_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'DatumNode\' xmlns:jns1=\'http://datumnode.com/start/start_ip/radius\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._Id != null) {
      xml = xml + '<jns1:Id>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._Id);
      xml = xml + '</jns1:Id>';
     }
    }
    // block for local variables
    {
     if (this._Connection != null) {
      xml = xml + this._Connection.serialize(cxfjsutils, 'jns0:Connection', null);
     }
    }
    // block for local variables
    {
     if (this._Command != null) {
      xml = xml + this._Command.serialize(cxfjsutils, 'jns0:Command', null);
     }
    }
    // block for local variables
    {
     if (this._Parameters != null) {
      xml = xml + this._Parameters.serialize(cxfjsutils, 'jns1:Parameters', null);
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

datumnode_com_start_start_ip_radius_Stop_Radius_SessionRequest.prototype.serialize = datumnode_com_start_start_ip_radius_Stop_Radius_SessionRequest_serialize;

function datumnode_com_start_start_ip_radius_Stop_Radius_SessionRequest_deserialize (cxfjsutils, element) {
    var newobject = new datumnode_com_start_start_ip_radius_Stop_Radius_SessionRequest();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Id');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'Id')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = parseInt(value);
     }
     newobject.setId(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Connection');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'DatumNode', 'Connection')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = DN_MetaConnection_deserialize(cxfjsutils, curElement);
     }
     newobject.setConnection(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Command');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'DatumNode', 'Command')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = DN_MetaCommand_deserialize(cxfjsutils, curElement);
     }
     newobject.setCommand(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Parameters');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'Parameters')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = datumnode_com_start_start_ip_radius_Stop_Radius_SessionInputParameters_deserialize(cxfjsutils, curElement);
     }
     newobject.setParameters(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://datumnode.com/start/start_ip/radius}Get_Traffic_by_LoginInputParameters
//
function datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginInputParameters () {
    this.typeMarker = 'datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginInputParameters';
    this._p_Filial = null;
    this._p_Date_Beg = null;
    this._p_Date_End = null;
    this._p_Login = null;
    this._p_Interval = null;
    this._p_Services = null;
}

//
// accessor is datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginInputParameters.prototype.getP_Filial
// element get for p_Filial
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for p_Filial
// setter function is is datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginInputParameters.prototype.setP_Filial
//
function datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginInputParameters_getP_Filial() { return this._p_Filial;}

datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginInputParameters.prototype.getP_Filial = datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginInputParameters_getP_Filial;

function datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginInputParameters_setP_Filial(value) { this._p_Filial = value;}

datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginInputParameters.prototype.setP_Filial = datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginInputParameters_setP_Filial;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginInputParameters.prototype.getP_Date_Beg
// element get for p_Date_Beg
// - element type is {http://www.w3.org/2001/XMLSchema}dateTime
// - required element
// - nillable
//
// element set for p_Date_Beg
// setter function is is datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginInputParameters.prototype.setP_Date_Beg
//
function datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginInputParameters_getP_Date_Beg() { return this._p_Date_Beg;}

datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginInputParameters.prototype.getP_Date_Beg = datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginInputParameters_getP_Date_Beg;

function datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginInputParameters_setP_Date_Beg(value) { this._p_Date_Beg = value;}

datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginInputParameters.prototype.setP_Date_Beg = datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginInputParameters_setP_Date_Beg;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginInputParameters.prototype.getP_Date_End
// element get for p_Date_End
// - element type is {http://www.w3.org/2001/XMLSchema}dateTime
// - required element
// - nillable
//
// element set for p_Date_End
// setter function is is datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginInputParameters.prototype.setP_Date_End
//
function datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginInputParameters_getP_Date_End() { return this._p_Date_End;}

datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginInputParameters.prototype.getP_Date_End = datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginInputParameters_getP_Date_End;

function datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginInputParameters_setP_Date_End(value) { this._p_Date_End = value;}

datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginInputParameters.prototype.setP_Date_End = datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginInputParameters_setP_Date_End;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginInputParameters.prototype.getP_Login
// element get for p_Login
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for p_Login
// setter function is is datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginInputParameters.prototype.setP_Login
//
function datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginInputParameters_getP_Login() { return this._p_Login;}

datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginInputParameters.prototype.getP_Login = datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginInputParameters_getP_Login;

function datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginInputParameters_setP_Login(value) { this._p_Login = value;}

datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginInputParameters.prototype.setP_Login = datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginInputParameters_setP_Login;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginInputParameters.prototype.getP_Interval
// element get for p_Interval
// - element type is {http://www.w3.org/2001/XMLSchema}decimal
// - required element
// - nillable
//
// element set for p_Interval
// setter function is is datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginInputParameters.prototype.setP_Interval
//
function datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginInputParameters_getP_Interval() { return this._p_Interval;}

datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginInputParameters.prototype.getP_Interval = datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginInputParameters_getP_Interval;

function datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginInputParameters_setP_Interval(value) { this._p_Interval = value;}

datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginInputParameters.prototype.setP_Interval = datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginInputParameters_setP_Interval;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginInputParameters.prototype.getP_Services
// element get for p_Services
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for p_Services
// setter function is is datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginInputParameters.prototype.setP_Services
//
function datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginInputParameters_getP_Services() { return this._p_Services;}

datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginInputParameters.prototype.getP_Services = datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginInputParameters_getP_Services;

function datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginInputParameters_setP_Services(value) { this._p_Services = value;}

datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginInputParameters.prototype.setP_Services = datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginInputParameters_setP_Services;
//
// Serialize {http://datumnode.com/start/start_ip/radius}Get_Traffic_by_LoginInputParameters
//
function datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginInputParameters_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'DatumNode\' xmlns:jns1=\'http://datumnode.com/start/start_ip/radius\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._p_Filial != null) {
      xml = xml + '<jns1:p_Filial>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._p_Filial);
      xml = xml + '</jns1:p_Filial>';
     }
    }
    // block for local variables
    {
     if (this._p_Date_Beg == null) {
      xml = xml + '<jns1:p_Date_Beg xsi:nil=\'true\'/>';
     } else {
      xml = xml + '<jns1:p_Date_Beg>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._p_Date_Beg);
      xml = xml + '</jns1:p_Date_Beg>';
     }
    }
    // block for local variables
    {
     if (this._p_Date_End == null) {
      xml = xml + '<jns1:p_Date_End xsi:nil=\'true\'/>';
     } else {
      xml = xml + '<jns1:p_Date_End>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._p_Date_End);
      xml = xml + '</jns1:p_Date_End>';
     }
    }
    // block for local variables
    {
     if (this._p_Login != null) {
      xml = xml + '<jns1:p_Login>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._p_Login);
      xml = xml + '</jns1:p_Login>';
     }
    }
    // block for local variables
    {
     if (this._p_Interval == null) {
      xml = xml + '<jns1:p_Interval xsi:nil=\'true\'/>';
     } else {
      xml = xml + '<jns1:p_Interval>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._p_Interval);
      xml = xml + '</jns1:p_Interval>';
     }
    }
    // block for local variables
    {
     if (this._p_Services != null) {
      xml = xml + '<jns1:p_Services>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._p_Services);
      xml = xml + '</jns1:p_Services>';
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginInputParameters.prototype.serialize = datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginInputParameters_serialize;

function datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginInputParameters_deserialize (cxfjsutils, element) {
    var newobject = new datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginInputParameters();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing p_Filial');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'p_Filial')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setP_Filial(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing p_Date_Beg');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setP_Date_Beg(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing p_Date_End');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setP_Date_End(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing p_Login');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'p_Login')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setP_Login(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing p_Interval');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setP_Interval(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing p_Services');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'p_Services')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setP_Services(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://datumnode.com/start/start_ip/radius}Get_Sessions_by_LoginOutputParameters
//
function datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginOutputParameters () {
    this.typeMarker = 'datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginOutputParameters';
}

//
// Serialize {http://datumnode.com/start/start_ip/radius}Get_Sessions_by_LoginOutputParameters
//
function datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginOutputParameters_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'DatumNode\' xmlns:jns1=\'http://datumnode.com/start/start_ip/radius\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginOutputParameters.prototype.serialize = datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginOutputParameters_serialize;

function datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginOutputParameters_deserialize (cxfjsutils, element) {
    var newobject = new datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginOutputParameters();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    return newobject;
}

//
// Constructor for XML Schema item {http://datumnode.com/start/start_ip/radius}Get_Sessions_by_LoginRequest
//
function datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginRequest () {
    this.typeMarker = 'datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginRequest';
    this._Id = null;
    this._Connection = null;
    this._Command = null;
    this._Parameters = null;
}

//
// accessor is datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginRequest.prototype.getId
// element get for Id
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - optional element
//
// element set for Id
// setter function is is datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginRequest.prototype.setId
//
function datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginRequest_getId() { return this._Id;}

datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginRequest.prototype.getId = datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginRequest_getId;

function datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginRequest_setId(value) { this._Id = value;}

datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginRequest.prototype.setId = datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginRequest_setId;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginRequest.prototype.getConnection
// element get for Connection
// - element type is {DatumNode}MetaConnection
// - optional element
//
// element set for Connection
// setter function is is datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginRequest.prototype.setConnection
//
function datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginRequest_getConnection() { return this._Connection;}

datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginRequest.prototype.getConnection = datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginRequest_getConnection;

function datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginRequest_setConnection(value) { this._Connection = value;}

datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginRequest.prototype.setConnection = datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginRequest_setConnection;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginRequest.prototype.getCommand
// element get for Command
// - element type is {DatumNode}MetaCommand
// - optional element
//
// element set for Command
// setter function is is datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginRequest.prototype.setCommand
//
function datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginRequest_getCommand() { return this._Command;}

datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginRequest.prototype.getCommand = datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginRequest_getCommand;

function datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginRequest_setCommand(value) { this._Command = value;}

datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginRequest.prototype.setCommand = datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginRequest_setCommand;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginRequest.prototype.getParameters
// element get for Parameters
// - element type is {http://datumnode.com/start/start_ip/radius}Get_Sessions_by_LoginInputParameters
// - optional element
//
// element set for Parameters
// setter function is is datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginRequest.prototype.setParameters
//
function datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginRequest_getParameters() { return this._Parameters;}

datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginRequest.prototype.getParameters = datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginRequest_getParameters;

function datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginRequest_setParameters(value) { this._Parameters = value;}

datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginRequest.prototype.setParameters = datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginRequest_setParameters;
//
// Serialize {http://datumnode.com/start/start_ip/radius}Get_Sessions_by_LoginRequest
//
function datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginRequest_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'DatumNode\' xmlns:jns1=\'http://datumnode.com/start/start_ip/radius\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._Id != null) {
      xml = xml + '<jns1:Id>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._Id);
      xml = xml + '</jns1:Id>';
     }
    }
    // block for local variables
    {
     if (this._Connection != null) {
      xml = xml + this._Connection.serialize(cxfjsutils, 'jns0:Connection', null);
     }
    }
    // block for local variables
    {
     if (this._Command != null) {
      xml = xml + this._Command.serialize(cxfjsutils, 'jns0:Command', null);
     }
    }
    // block for local variables
    {
     if (this._Parameters != null) {
      xml = xml + this._Parameters.serialize(cxfjsutils, 'jns1:Parameters', null);
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginRequest.prototype.serialize = datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginRequest_serialize;

function datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginRequest_deserialize (cxfjsutils, element) {
    var newobject = new datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginRequest();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Id');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'Id')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = parseInt(value);
     }
     newobject.setId(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Connection');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'DatumNode', 'Connection')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = DN_MetaConnection_deserialize(cxfjsutils, curElement);
     }
     newobject.setConnection(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Command');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'DatumNode', 'Command')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = DN_MetaCommand_deserialize(cxfjsutils, curElement);
     }
     newobject.setCommand(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Parameters');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'Parameters')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginInputParameters_deserialize(cxfjsutils, curElement);
     }
     newobject.setParameters(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://datumnode.com/start/start_ip/radius}Get_Traffic_by_LoginResult
//
function datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginResult () {
    this.typeMarker = 'datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginResult';
    this._Result = null;
    this._Parameters = null;
    this._ResultSet = null;
}

//
// accessor is datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginResult.prototype.getResult
// element get for Result
// - element type is {DatumNode}DbResult
// - optional element
//
// element set for Result
// setter function is is datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginResult.prototype.setResult
//
function datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginResult_getResult() { return this._Result;}

datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginResult.prototype.getResult = datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginResult_getResult;

function datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginResult_setResult(value) { this._Result = value;}

datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginResult.prototype.setResult = datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginResult_setResult;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginResult.prototype.getParameters
// element get for Parameters
// - element type is {http://datumnode.com/start/start_ip/radius}Get_Traffic_by_LoginOutputParameters
// - optional element
//
// element set for Parameters
// setter function is is datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginResult.prototype.setParameters
//
function datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginResult_getParameters() { return this._Parameters;}

datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginResult.prototype.getParameters = datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginResult_getParameters;

function datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginResult_setParameters(value) { this._Parameters = value;}

datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginResult.prototype.setParameters = datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginResult_setParameters;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginResult.prototype.getResultSet
// element get for ResultSet
// - element type is {http://datumnode.com/start/start_ip/radius}ArrayOfGet_Traffic_by_LoginEntity
// - optional element
//
// element set for ResultSet
// setter function is is datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginResult.prototype.setResultSet
//
function datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginResult_getResultSet() { return this._ResultSet;}

datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginResult.prototype.getResultSet = datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginResult_getResultSet;

function datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginResult_setResultSet(value) { this._ResultSet = value;}

datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginResult.prototype.setResultSet = datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginResult_setResultSet;
//
// Serialize {http://datumnode.com/start/start_ip/radius}Get_Traffic_by_LoginResult
//
function datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginResult_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'DatumNode\' xmlns:jns1=\'http://datumnode.com/start/start_ip/radius\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._Result != null) {
      xml = xml + this._Result.serialize(cxfjsutils, 'jns0:Result', null);
     }
    }
    // block for local variables
    {
     if (this._Parameters != null) {
      xml = xml + this._Parameters.serialize(cxfjsutils, 'jns1:Parameters', null);
     }
    }
    // block for local variables
    {
     if (this._ResultSet != null) {
      xml = xml + this._ResultSet.serialize(cxfjsutils, 'jns1:ResultSet', null);
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginResult.prototype.serialize = datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginResult_serialize;

function datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginResult_deserialize (cxfjsutils, element) {
    var newobject = new datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginResult();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Result');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'DatumNode', 'Result')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = DN_DbResult_deserialize(cxfjsutils, curElement);
     }
     newobject.setResult(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Parameters');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'Parameters')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginOutputParameters_deserialize(cxfjsutils, curElement);
     }
     newobject.setParameters(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing ResultSet');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'ResultSet')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = datumnode_com_start_start_ip_radius_ArrayOfGet_Traffic_by_LoginEntity_deserialize(cxfjsutils, curElement);
     }
     newobject.setResultSet(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://datumnode.com/start/start_ip/radius}Get_Access_by_LoginResult
//
function datumnode_com_start_start_ip_radius_Get_Access_by_LoginResult () {
    this.typeMarker = 'datumnode_com_start_start_ip_radius_Get_Access_by_LoginResult';
    this._Result = null;
    this._Parameters = null;
    this._ResultSet = null;
}

//
// accessor is datumnode_com_start_start_ip_radius_Get_Access_by_LoginResult.prototype.getResult
// element get for Result
// - element type is {DatumNode}DbResult
// - optional element
//
// element set for Result
// setter function is is datumnode_com_start_start_ip_radius_Get_Access_by_LoginResult.prototype.setResult
//
function datumnode_com_start_start_ip_radius_Get_Access_by_LoginResult_getResult() { return this._Result;}

datumnode_com_start_start_ip_radius_Get_Access_by_LoginResult.prototype.getResult = datumnode_com_start_start_ip_radius_Get_Access_by_LoginResult_getResult;

function datumnode_com_start_start_ip_radius_Get_Access_by_LoginResult_setResult(value) { this._Result = value;}

datumnode_com_start_start_ip_radius_Get_Access_by_LoginResult.prototype.setResult = datumnode_com_start_start_ip_radius_Get_Access_by_LoginResult_setResult;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Access_by_LoginResult.prototype.getParameters
// element get for Parameters
// - element type is {http://datumnode.com/start/start_ip/radius}Get_Access_by_LoginOutputParameters
// - optional element
//
// element set for Parameters
// setter function is is datumnode_com_start_start_ip_radius_Get_Access_by_LoginResult.prototype.setParameters
//
function datumnode_com_start_start_ip_radius_Get_Access_by_LoginResult_getParameters() { return this._Parameters;}

datumnode_com_start_start_ip_radius_Get_Access_by_LoginResult.prototype.getParameters = datumnode_com_start_start_ip_radius_Get_Access_by_LoginResult_getParameters;

function datumnode_com_start_start_ip_radius_Get_Access_by_LoginResult_setParameters(value) { this._Parameters = value;}

datumnode_com_start_start_ip_radius_Get_Access_by_LoginResult.prototype.setParameters = datumnode_com_start_start_ip_radius_Get_Access_by_LoginResult_setParameters;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Access_by_LoginResult.prototype.getResultSet
// element get for ResultSet
// - element type is {http://datumnode.com/start/start_ip/radius}ArrayOfGet_Access_by_LoginEntity
// - optional element
//
// element set for ResultSet
// setter function is is datumnode_com_start_start_ip_radius_Get_Access_by_LoginResult.prototype.setResultSet
//
function datumnode_com_start_start_ip_radius_Get_Access_by_LoginResult_getResultSet() { return this._ResultSet;}

datumnode_com_start_start_ip_radius_Get_Access_by_LoginResult.prototype.getResultSet = datumnode_com_start_start_ip_radius_Get_Access_by_LoginResult_getResultSet;

function datumnode_com_start_start_ip_radius_Get_Access_by_LoginResult_setResultSet(value) { this._ResultSet = value;}

datumnode_com_start_start_ip_radius_Get_Access_by_LoginResult.prototype.setResultSet = datumnode_com_start_start_ip_radius_Get_Access_by_LoginResult_setResultSet;
//
// Serialize {http://datumnode.com/start/start_ip/radius}Get_Access_by_LoginResult
//
function datumnode_com_start_start_ip_radius_Get_Access_by_LoginResult_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'DatumNode\' xmlns:jns1=\'http://datumnode.com/start/start_ip/radius\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._Result != null) {
      xml = xml + this._Result.serialize(cxfjsutils, 'jns0:Result', null);
     }
    }
    // block for local variables
    {
     if (this._Parameters != null) {
      xml = xml + this._Parameters.serialize(cxfjsutils, 'jns1:Parameters', null);
     }
    }
    // block for local variables
    {
     if (this._ResultSet != null) {
      xml = xml + this._ResultSet.serialize(cxfjsutils, 'jns1:ResultSet', null);
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

datumnode_com_start_start_ip_radius_Get_Access_by_LoginResult.prototype.serialize = datumnode_com_start_start_ip_radius_Get_Access_by_LoginResult_serialize;

function datumnode_com_start_start_ip_radius_Get_Access_by_LoginResult_deserialize (cxfjsutils, element) {
    var newobject = new datumnode_com_start_start_ip_radius_Get_Access_by_LoginResult();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Result');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'DatumNode', 'Result')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = DN_DbResult_deserialize(cxfjsutils, curElement);
     }
     newobject.setResult(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Parameters');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'Parameters')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = datumnode_com_start_start_ip_radius_Get_Access_by_LoginOutputParameters_deserialize(cxfjsutils, curElement);
     }
     newobject.setParameters(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing ResultSet');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'ResultSet')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = datumnode_com_start_start_ip_radius_ArrayOfGet_Access_by_LoginEntity_deserialize(cxfjsutils, curElement);
     }
     newobject.setResultSet(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://datumnode.com/start/start_ip/radius}Get_Srv_ListInputParameters
//
function datumnode_com_start_start_ip_radius_Get_Srv_ListInputParameters () {
    this.typeMarker = 'datumnode_com_start_start_ip_radius_Get_Srv_ListInputParameters';
    this._p_Filial = null;
    this._p_Date_Beg = null;
    this._p_Date_End = null;
    this._p_Login = null;
}

//
// accessor is datumnode_com_start_start_ip_radius_Get_Srv_ListInputParameters.prototype.getP_Filial
// element get for p_Filial
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for p_Filial
// setter function is is datumnode_com_start_start_ip_radius_Get_Srv_ListInputParameters.prototype.setP_Filial
//
function datumnode_com_start_start_ip_radius_Get_Srv_ListInputParameters_getP_Filial() { return this._p_Filial;}

datumnode_com_start_start_ip_radius_Get_Srv_ListInputParameters.prototype.getP_Filial = datumnode_com_start_start_ip_radius_Get_Srv_ListInputParameters_getP_Filial;

function datumnode_com_start_start_ip_radius_Get_Srv_ListInputParameters_setP_Filial(value) { this._p_Filial = value;}

datumnode_com_start_start_ip_radius_Get_Srv_ListInputParameters.prototype.setP_Filial = datumnode_com_start_start_ip_radius_Get_Srv_ListInputParameters_setP_Filial;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Srv_ListInputParameters.prototype.getP_Date_Beg
// element get for p_Date_Beg
// - element type is {http://www.w3.org/2001/XMLSchema}dateTime
// - required element
// - nillable
//
// element set for p_Date_Beg
// setter function is is datumnode_com_start_start_ip_radius_Get_Srv_ListInputParameters.prototype.setP_Date_Beg
//
function datumnode_com_start_start_ip_radius_Get_Srv_ListInputParameters_getP_Date_Beg() { return this._p_Date_Beg;}

datumnode_com_start_start_ip_radius_Get_Srv_ListInputParameters.prototype.getP_Date_Beg = datumnode_com_start_start_ip_radius_Get_Srv_ListInputParameters_getP_Date_Beg;

function datumnode_com_start_start_ip_radius_Get_Srv_ListInputParameters_setP_Date_Beg(value) { this._p_Date_Beg = value;}

datumnode_com_start_start_ip_radius_Get_Srv_ListInputParameters.prototype.setP_Date_Beg = datumnode_com_start_start_ip_radius_Get_Srv_ListInputParameters_setP_Date_Beg;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Srv_ListInputParameters.prototype.getP_Date_End
// element get for p_Date_End
// - element type is {http://www.w3.org/2001/XMLSchema}dateTime
// - required element
// - nillable
//
// element set for p_Date_End
// setter function is is datumnode_com_start_start_ip_radius_Get_Srv_ListInputParameters.prototype.setP_Date_End
//
function datumnode_com_start_start_ip_radius_Get_Srv_ListInputParameters_getP_Date_End() { return this._p_Date_End;}

datumnode_com_start_start_ip_radius_Get_Srv_ListInputParameters.prototype.getP_Date_End = datumnode_com_start_start_ip_radius_Get_Srv_ListInputParameters_getP_Date_End;

function datumnode_com_start_start_ip_radius_Get_Srv_ListInputParameters_setP_Date_End(value) { this._p_Date_End = value;}

datumnode_com_start_start_ip_radius_Get_Srv_ListInputParameters.prototype.setP_Date_End = datumnode_com_start_start_ip_radius_Get_Srv_ListInputParameters_setP_Date_End;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Srv_ListInputParameters.prototype.getP_Login
// element get for p_Login
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for p_Login
// setter function is is datumnode_com_start_start_ip_radius_Get_Srv_ListInputParameters.prototype.setP_Login
//
function datumnode_com_start_start_ip_radius_Get_Srv_ListInputParameters_getP_Login() { return this._p_Login;}

datumnode_com_start_start_ip_radius_Get_Srv_ListInputParameters.prototype.getP_Login = datumnode_com_start_start_ip_radius_Get_Srv_ListInputParameters_getP_Login;

function datumnode_com_start_start_ip_radius_Get_Srv_ListInputParameters_setP_Login(value) { this._p_Login = value;}

datumnode_com_start_start_ip_radius_Get_Srv_ListInputParameters.prototype.setP_Login = datumnode_com_start_start_ip_radius_Get_Srv_ListInputParameters_setP_Login;
//
// Serialize {http://datumnode.com/start/start_ip/radius}Get_Srv_ListInputParameters
//
function datumnode_com_start_start_ip_radius_Get_Srv_ListInputParameters_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'DatumNode\' xmlns:jns1=\'http://datumnode.com/start/start_ip/radius\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._p_Filial != null) {
      xml = xml + '<jns1:p_Filial>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._p_Filial);
      xml = xml + '</jns1:p_Filial>';
     }
    }
    // block for local variables
    {
     if (this._p_Date_Beg == null) {
      xml = xml + '<jns1:p_Date_Beg xsi:nil=\'true\'/>';
     } else {
      xml = xml + '<jns1:p_Date_Beg>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._p_Date_Beg);
      xml = xml + '</jns1:p_Date_Beg>';
     }
    }
    // block for local variables
    {
     if (this._p_Date_End == null) {
      xml = xml + '<jns1:p_Date_End xsi:nil=\'true\'/>';
     } else {
      xml = xml + '<jns1:p_Date_End>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._p_Date_End);
      xml = xml + '</jns1:p_Date_End>';
     }
    }
    // block for local variables
    {
     if (this._p_Login != null) {
      xml = xml + '<jns1:p_Login>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._p_Login);
      xml = xml + '</jns1:p_Login>';
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

datumnode_com_start_start_ip_radius_Get_Srv_ListInputParameters.prototype.serialize = datumnode_com_start_start_ip_radius_Get_Srv_ListInputParameters_serialize;

function datumnode_com_start_start_ip_radius_Get_Srv_ListInputParameters_deserialize (cxfjsutils, element) {
    var newobject = new datumnode_com_start_start_ip_radius_Get_Srv_ListInputParameters();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing p_Filial');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'p_Filial')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setP_Filial(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing p_Date_Beg');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setP_Date_Beg(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing p_Date_End');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setP_Date_End(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing p_Login');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'p_Login')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setP_Login(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://datumnode.com/start/start_ip/radius}Get_Sessions_by_LoginEntity
//
function datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity () {
    this.typeMarker = 'datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity';
    this._status = null;
    this._cid = null;
    this._cid_primary = null;
    this._ip = null;
    this._nas_ip = null;
    this._nas_name = null;
    this._nas_zone = null;
    this._login = null;
    this._mac_addr = null;
    this._nas_port_id = null;
    this._policy = null;
    this._zone_access_date = null;
    this._zone_start_date = null;
    this._zone_last_alive_date = null;
    this._zone_stop_date = null;
    this._sys_access_date = null;
    this._sys_start_date = null;
    this._sys_stop_date = null;
    this._stop_cause = null;
    this._bytes_in = null;
    this._bytes_out = null;
}

//
// accessor is datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity.prototype.getStatus
// element get for status
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for status
// setter function is is datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity.prototype.setStatus
//
function datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity_getStatus() { return this._status;}

datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity.prototype.getStatus = datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity_getStatus;

function datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity_setStatus(value) { this._status = value;}

datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity.prototype.setStatus = datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity_setStatus;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity.prototype.getCid
// element get for cid
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for cid
// setter function is is datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity.prototype.setCid
//
function datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity_getCid() { return this._cid;}

datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity.prototype.getCid = datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity_getCid;

function datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity_setCid(value) { this._cid = value;}

datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity.prototype.setCid = datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity_setCid;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity.prototype.getCid_primary
// element get for cid_primary
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for cid_primary
// setter function is is datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity.prototype.setCid_primary
//
function datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity_getCid_primary() { return this._cid_primary;}

datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity.prototype.getCid_primary = datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity_getCid_primary;

function datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity_setCid_primary(value) { this._cid_primary = value;}

datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity.prototype.setCid_primary = datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity_setCid_primary;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity.prototype.getIp
// element get for ip
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for ip
// setter function is is datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity.prototype.setIp
//
function datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity_getIp() { return this._ip;}

datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity.prototype.getIp = datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity_getIp;

function datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity_setIp(value) { this._ip = value;}

datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity.prototype.setIp = datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity_setIp;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity.prototype.getNas_ip
// element get for nas_ip
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for nas_ip
// setter function is is datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity.prototype.setNas_ip
//
function datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity_getNas_ip() { return this._nas_ip;}

datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity.prototype.getNas_ip = datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity_getNas_ip;

function datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity_setNas_ip(value) { this._nas_ip = value;}

datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity.prototype.setNas_ip = datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity_setNas_ip;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity.prototype.getNas_name
// element get for nas_name
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for nas_name
// setter function is is datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity.prototype.setNas_name
//
function datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity_getNas_name() { return this._nas_name;}

datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity.prototype.getNas_name = datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity_getNas_name;

function datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity_setNas_name(value) { this._nas_name = value;}

datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity.prototype.setNas_name = datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity_setNas_name;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity.prototype.getNas_zone
// element get for nas_zone
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for nas_zone
// setter function is is datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity.prototype.setNas_zone
//
function datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity_getNas_zone() { return this._nas_zone;}

datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity.prototype.getNas_zone = datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity_getNas_zone;

function datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity_setNas_zone(value) { this._nas_zone = value;}

datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity.prototype.setNas_zone = datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity_setNas_zone;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity.prototype.getLogin
// element get for login
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for login
// setter function is is datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity.prototype.setLogin
//
function datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity_getLogin() { return this._login;}

datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity.prototype.getLogin = datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity_getLogin;

function datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity_setLogin(value) { this._login = value;}

datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity.prototype.setLogin = datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity_setLogin;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity.prototype.getMac_addr
// element get for mac_addr
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for mac_addr
// setter function is is datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity.prototype.setMac_addr
//
function datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity_getMac_addr() { return this._mac_addr;}

datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity.prototype.getMac_addr = datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity_getMac_addr;

function datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity_setMac_addr(value) { this._mac_addr = value;}

datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity.prototype.setMac_addr = datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity_setMac_addr;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity.prototype.getNas_port_id
// element get for nas_port_id
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for nas_port_id
// setter function is is datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity.prototype.setNas_port_id
//
function datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity_getNas_port_id() { return this._nas_port_id;}

datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity.prototype.getNas_port_id = datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity_getNas_port_id;

function datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity_setNas_port_id(value) { this._nas_port_id = value;}

datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity.prototype.setNas_port_id = datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity_setNas_port_id;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity.prototype.getPolicy
// element get for policy
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for policy
// setter function is is datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity.prototype.setPolicy
//
function datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity_getPolicy() { return this._policy;}

datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity.prototype.getPolicy = datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity_getPolicy;

function datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity_setPolicy(value) { this._policy = value;}

datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity.prototype.setPolicy = datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity_setPolicy;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity.prototype.getZone_access_date
// element get for zone_access_date
// - element type is {http://www.w3.org/2001/XMLSchema}dateTime
// - required element
// - nillable
//
// element set for zone_access_date
// setter function is is datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity.prototype.setZone_access_date
//
function datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity_getZone_access_date() { return this._zone_access_date;}

datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity.prototype.getZone_access_date = datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity_getZone_access_date;

function datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity_setZone_access_date(value) { this._zone_access_date = value;}

datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity.prototype.setZone_access_date = datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity_setZone_access_date;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity.prototype.getZone_start_date
// element get for zone_start_date
// - element type is {http://www.w3.org/2001/XMLSchema}dateTime
// - required element
// - nillable
//
// element set for zone_start_date
// setter function is is datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity.prototype.setZone_start_date
//
function datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity_getZone_start_date() { return this._zone_start_date;}

datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity.prototype.getZone_start_date = datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity_getZone_start_date;

function datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity_setZone_start_date(value) { this._zone_start_date = value;}

datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity.prototype.setZone_start_date = datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity_setZone_start_date;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity.prototype.getZone_last_alive_date
// element get for zone_last_alive_date
// - element type is {http://www.w3.org/2001/XMLSchema}dateTime
// - required element
// - nillable
//
// element set for zone_last_alive_date
// setter function is is datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity.prototype.setZone_last_alive_date
//
function datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity_getZone_last_alive_date() { return this._zone_last_alive_date;}

datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity.prototype.getZone_last_alive_date = datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity_getZone_last_alive_date;

function datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity_setZone_last_alive_date(value) { this._zone_last_alive_date = value;}

datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity.prototype.setZone_last_alive_date = datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity_setZone_last_alive_date;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity.prototype.getZone_stop_date
// element get for zone_stop_date
// - element type is {http://www.w3.org/2001/XMLSchema}dateTime
// - required element
// - nillable
//
// element set for zone_stop_date
// setter function is is datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity.prototype.setZone_stop_date
//
function datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity_getZone_stop_date() { return this._zone_stop_date;}

datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity.prototype.getZone_stop_date = datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity_getZone_stop_date;

function datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity_setZone_stop_date(value) { this._zone_stop_date = value;}

datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity.prototype.setZone_stop_date = datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity_setZone_stop_date;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity.prototype.getSys_access_date
// element get for sys_access_date
// - element type is {http://www.w3.org/2001/XMLSchema}dateTime
// - required element
// - nillable
//
// element set for sys_access_date
// setter function is is datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity.prototype.setSys_access_date
//
function datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity_getSys_access_date() { return this._sys_access_date;}

datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity.prototype.getSys_access_date = datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity_getSys_access_date;

function datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity_setSys_access_date(value) { this._sys_access_date = value;}

datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity.prototype.setSys_access_date = datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity_setSys_access_date;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity.prototype.getSys_start_date
// element get for sys_start_date
// - element type is {http://www.w3.org/2001/XMLSchema}dateTime
// - required element
// - nillable
//
// element set for sys_start_date
// setter function is is datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity.prototype.setSys_start_date
//
function datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity_getSys_start_date() { return this._sys_start_date;}

datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity.prototype.getSys_start_date = datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity_getSys_start_date;

function datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity_setSys_start_date(value) { this._sys_start_date = value;}

datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity.prototype.setSys_start_date = datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity_setSys_start_date;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity.prototype.getSys_stop_date
// element get for sys_stop_date
// - element type is {http://www.w3.org/2001/XMLSchema}dateTime
// - required element
// - nillable
//
// element set for sys_stop_date
// setter function is is datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity.prototype.setSys_stop_date
//
function datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity_getSys_stop_date() { return this._sys_stop_date;}

datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity.prototype.getSys_stop_date = datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity_getSys_stop_date;

function datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity_setSys_stop_date(value) { this._sys_stop_date = value;}

datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity.prototype.setSys_stop_date = datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity_setSys_stop_date;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity.prototype.getStop_cause
// element get for stop_cause
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for stop_cause
// setter function is is datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity.prototype.setStop_cause
//
function datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity_getStop_cause() { return this._stop_cause;}

datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity.prototype.getStop_cause = datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity_getStop_cause;

function datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity_setStop_cause(value) { this._stop_cause = value;}

datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity.prototype.setStop_cause = datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity_setStop_cause;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity.prototype.getBytes_in
// element get for bytes_in
// - element type is {http://www.w3.org/2001/XMLSchema}decimal
// - required element
// - nillable
//
// element set for bytes_in
// setter function is is datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity.prototype.setBytes_in
//
function datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity_getBytes_in() { return this._bytes_in;}

datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity.prototype.getBytes_in = datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity_getBytes_in;

function datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity_setBytes_in(value) { this._bytes_in = value;}

datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity.prototype.setBytes_in = datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity_setBytes_in;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity.prototype.getBytes_out
// element get for bytes_out
// - element type is {http://www.w3.org/2001/XMLSchema}decimal
// - required element
// - nillable
//
// element set for bytes_out
// setter function is is datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity.prototype.setBytes_out
//
function datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity_getBytes_out() { return this._bytes_out;}

datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity.prototype.getBytes_out = datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity_getBytes_out;

function datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity_setBytes_out(value) { this._bytes_out = value;}

datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity.prototype.setBytes_out = datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity_setBytes_out;
//
// Serialize {http://datumnode.com/start/start_ip/radius}Get_Sessions_by_LoginEntity
//
function datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'DatumNode\' xmlns:jns1=\'http://datumnode.com/start/start_ip/radius\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._status != null) {
      xml = xml + '<jns1:status>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._status);
      xml = xml + '</jns1:status>';
     }
    }
    // block for local variables
    {
     if (this._cid != null) {
      xml = xml + '<jns1:cid>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._cid);
      xml = xml + '</jns1:cid>';
     }
    }
    // block for local variables
    {
     if (this._cid_primary != null) {
      xml = xml + '<jns1:cid_primary>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._cid_primary);
      xml = xml + '</jns1:cid_primary>';
     }
    }
    // block for local variables
    {
     if (this._ip != null) {
      xml = xml + '<jns1:ip>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._ip);
      xml = xml + '</jns1:ip>';
     }
    }
    // block for local variables
    {
     if (this._nas_ip != null) {
      xml = xml + '<jns1:nas_ip>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._nas_ip);
      xml = xml + '</jns1:nas_ip>';
     }
    }
    // block for local variables
    {
     if (this._nas_name != null) {
      xml = xml + '<jns1:nas_name>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._nas_name);
      xml = xml + '</jns1:nas_name>';
     }
    }
    // block for local variables
    {
     if (this._nas_zone != null) {
      xml = xml + '<jns1:nas_zone>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._nas_zone);
      xml = xml + '</jns1:nas_zone>';
     }
    }
    // block for local variables
    {
     if (this._login != null) {
      xml = xml + '<jns1:login>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._login);
      xml = xml + '</jns1:login>';
     }
    }
    // block for local variables
    {
     if (this._mac_addr != null) {
      xml = xml + '<jns1:mac_addr>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._mac_addr);
      xml = xml + '</jns1:mac_addr>';
     }
    }
    // block for local variables
    {
     if (this._nas_port_id != null) {
      xml = xml + '<jns1:nas_port_id>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._nas_port_id);
      xml = xml + '</jns1:nas_port_id>';
     }
    }
    // block for local variables
    {
     if (this._policy != null) {
      xml = xml + '<jns1:policy>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._policy);
      xml = xml + '</jns1:policy>';
     }
    }
    // block for local variables
    {
     if (this._zone_access_date == null) {
      xml = xml + '<jns1:zone_access_date xsi:nil=\'true\'/>';
     } else {
      xml = xml + '<jns1:zone_access_date>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._zone_access_date);
      xml = xml + '</jns1:zone_access_date>';
     }
    }
    // block for local variables
    {
     if (this._zone_start_date == null) {
      xml = xml + '<jns1:zone_start_date xsi:nil=\'true\'/>';
     } else {
      xml = xml + '<jns1:zone_start_date>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._zone_start_date);
      xml = xml + '</jns1:zone_start_date>';
     }
    }
    // block for local variables
    {
     if (this._zone_last_alive_date == null) {
      xml = xml + '<jns1:zone_last_alive_date xsi:nil=\'true\'/>';
     } else {
      xml = xml + '<jns1:zone_last_alive_date>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._zone_last_alive_date);
      xml = xml + '</jns1:zone_last_alive_date>';
     }
    }
    // block for local variables
    {
     if (this._zone_stop_date == null) {
      xml = xml + '<jns1:zone_stop_date xsi:nil=\'true\'/>';
     } else {
      xml = xml + '<jns1:zone_stop_date>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._zone_stop_date);
      xml = xml + '</jns1:zone_stop_date>';
     }
    }
    // block for local variables
    {
     if (this._sys_access_date == null) {
      xml = xml + '<jns1:sys_access_date xsi:nil=\'true\'/>';
     } else {
      xml = xml + '<jns1:sys_access_date>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._sys_access_date);
      xml = xml + '</jns1:sys_access_date>';
     }
    }
    // block for local variables
    {
     if (this._sys_start_date == null) {
      xml = xml + '<jns1:sys_start_date xsi:nil=\'true\'/>';
     } else {
      xml = xml + '<jns1:sys_start_date>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._sys_start_date);
      xml = xml + '</jns1:sys_start_date>';
     }
    }
    // block for local variables
    {
     if (this._sys_stop_date == null) {
      xml = xml + '<jns1:sys_stop_date xsi:nil=\'true\'/>';
     } else {
      xml = xml + '<jns1:sys_stop_date>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._sys_stop_date);
      xml = xml + '</jns1:sys_stop_date>';
     }
    }
    // block for local variables
    {
     if (this._stop_cause != null) {
      xml = xml + '<jns1:stop_cause>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._stop_cause);
      xml = xml + '</jns1:stop_cause>';
     }
    }
    // block for local variables
    {
     if (this._bytes_in == null) {
      xml = xml + '<jns1:bytes_in xsi:nil=\'true\'/>';
     } else {
      xml = xml + '<jns1:bytes_in>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._bytes_in);
      xml = xml + '</jns1:bytes_in>';
     }
    }
    // block for local variables
    {
     if (this._bytes_out == null) {
      xml = xml + '<jns1:bytes_out xsi:nil=\'true\'/>';
     } else {
      xml = xml + '<jns1:bytes_out>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._bytes_out);
      xml = xml + '</jns1:bytes_out>';
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity.prototype.serialize = datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity_serialize;

function datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity_deserialize (cxfjsutils, element) {
    var newobject = new datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing status');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'status')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setStatus(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing cid');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'cid')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setCid(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing cid_primary');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'cid_primary')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setCid_primary(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing ip');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'ip')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setIp(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing nas_ip');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'nas_ip')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setNas_ip(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing nas_name');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'nas_name')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setNas_name(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing nas_zone');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'nas_zone')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setNas_zone(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing login');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'login')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setLogin(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing mac_addr');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'mac_addr')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setMac_addr(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing nas_port_id');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'nas_port_id')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setNas_port_id(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing policy');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'policy')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setPolicy(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing zone_access_date');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setZone_access_date(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing zone_start_date');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setZone_start_date(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing zone_last_alive_date');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setZone_last_alive_date(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing zone_stop_date');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setZone_stop_date(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing sys_access_date');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setSys_access_date(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing sys_start_date');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setSys_start_date(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing sys_stop_date');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setSys_stop_date(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing stop_cause');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'stop_cause')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setStop_cause(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing bytes_in');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setBytes_in(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing bytes_out');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setBytes_out(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://datumnode.com/start/start_ip/radius}ArrayOfGet_Access_by_LoginEntity
//
function datumnode_com_start_start_ip_radius_ArrayOfGet_Access_by_LoginEntity () {
    this.typeMarker = 'datumnode_com_start_start_ip_radius_ArrayOfGet_Access_by_LoginEntity';
    this._Get_Access_by_LoginEntity = [];
}

//
// accessor is datumnode_com_start_start_ip_radius_ArrayOfGet_Access_by_LoginEntity.prototype.getGet_Access_by_LoginEntity
// element get for Get_Access_by_LoginEntity
// - element type is {http://datumnode.com/start/start_ip/radius}Get_Access_by_LoginEntity
// - required element
// - array
// - nillable
//
// element set for Get_Access_by_LoginEntity
// setter function is is datumnode_com_start_start_ip_radius_ArrayOfGet_Access_by_LoginEntity.prototype.setGet_Access_by_LoginEntity
//
function datumnode_com_start_start_ip_radius_ArrayOfGet_Access_by_LoginEntity_getGet_Access_by_LoginEntity() { return this._Get_Access_by_LoginEntity;}

datumnode_com_start_start_ip_radius_ArrayOfGet_Access_by_LoginEntity.prototype.getGet_Access_by_LoginEntity = datumnode_com_start_start_ip_radius_ArrayOfGet_Access_by_LoginEntity_getGet_Access_by_LoginEntity;

function datumnode_com_start_start_ip_radius_ArrayOfGet_Access_by_LoginEntity_setGet_Access_by_LoginEntity(value) { this._Get_Access_by_LoginEntity = value;}

datumnode_com_start_start_ip_radius_ArrayOfGet_Access_by_LoginEntity.prototype.setGet_Access_by_LoginEntity = datumnode_com_start_start_ip_radius_ArrayOfGet_Access_by_LoginEntity_setGet_Access_by_LoginEntity;
//
// Serialize {http://datumnode.com/start/start_ip/radius}ArrayOfGet_Access_by_LoginEntity
//
function datumnode_com_start_start_ip_radius_ArrayOfGet_Access_by_LoginEntity_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'DatumNode\' xmlns:jns1=\'http://datumnode.com/start/start_ip/radius\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._Get_Access_by_LoginEntity != null) {
      for (var ax = 0;ax < this._Get_Access_by_LoginEntity.length;ax ++) {
       if (this._Get_Access_by_LoginEntity[ax] == null) {
        xml = xml + '<jns1:Get_Access_by_LoginEntity xsi:nil=\'true\'/>';
       } else {
        xml = xml + this._Get_Access_by_LoginEntity[ax].serialize(cxfjsutils, 'jns1:Get_Access_by_LoginEntity', null);
       }
      }
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

datumnode_com_start_start_ip_radius_ArrayOfGet_Access_by_LoginEntity.prototype.serialize = datumnode_com_start_start_ip_radius_ArrayOfGet_Access_by_LoginEntity_serialize;

function datumnode_com_start_start_ip_radius_ArrayOfGet_Access_by_LoginEntity_deserialize (cxfjsutils, element) {
    var newobject = new datumnode_com_start_start_ip_radius_ArrayOfGet_Access_by_LoginEntity();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Get_Access_by_LoginEntity');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'Get_Access_by_LoginEntity')) {
     item = [];
     do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       arrayItem = datumnode_com_start_start_ip_radius_Get_Access_by_LoginEntity_deserialize(cxfjsutils, curElement);
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'Get_Access_by_LoginEntity'));
     newobject.setGet_Access_by_LoginEntity(item);
     var item = null;
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://datumnode.com/start/start_ip/radius}ArrayOfGet_Sessions_by_LoginEntity
//
function datumnode_com_start_start_ip_radius_ArrayOfGet_Sessions_by_LoginEntity () {
    this.typeMarker = 'datumnode_com_start_start_ip_radius_ArrayOfGet_Sessions_by_LoginEntity';
    this._Get_Sessions_by_LoginEntity = [];
}

//
// accessor is datumnode_com_start_start_ip_radius_ArrayOfGet_Sessions_by_LoginEntity.prototype.getGet_Sessions_by_LoginEntity
// element get for Get_Sessions_by_LoginEntity
// - element type is {http://datumnode.com/start/start_ip/radius}Get_Sessions_by_LoginEntity
// - required element
// - array
// - nillable
//
// element set for Get_Sessions_by_LoginEntity
// setter function is is datumnode_com_start_start_ip_radius_ArrayOfGet_Sessions_by_LoginEntity.prototype.setGet_Sessions_by_LoginEntity
//
function datumnode_com_start_start_ip_radius_ArrayOfGet_Sessions_by_LoginEntity_getGet_Sessions_by_LoginEntity() { return this._Get_Sessions_by_LoginEntity;}

datumnode_com_start_start_ip_radius_ArrayOfGet_Sessions_by_LoginEntity.prototype.getGet_Sessions_by_LoginEntity = datumnode_com_start_start_ip_radius_ArrayOfGet_Sessions_by_LoginEntity_getGet_Sessions_by_LoginEntity;

function datumnode_com_start_start_ip_radius_ArrayOfGet_Sessions_by_LoginEntity_setGet_Sessions_by_LoginEntity(value) { this._Get_Sessions_by_LoginEntity = value;}

datumnode_com_start_start_ip_radius_ArrayOfGet_Sessions_by_LoginEntity.prototype.setGet_Sessions_by_LoginEntity = datumnode_com_start_start_ip_radius_ArrayOfGet_Sessions_by_LoginEntity_setGet_Sessions_by_LoginEntity;
//
// Serialize {http://datumnode.com/start/start_ip/radius}ArrayOfGet_Sessions_by_LoginEntity
//
function datumnode_com_start_start_ip_radius_ArrayOfGet_Sessions_by_LoginEntity_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'DatumNode\' xmlns:jns1=\'http://datumnode.com/start/start_ip/radius\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._Get_Sessions_by_LoginEntity != null) {
      for (var ax = 0;ax < this._Get_Sessions_by_LoginEntity.length;ax ++) {
       if (this._Get_Sessions_by_LoginEntity[ax] == null) {
        xml = xml + '<jns1:Get_Sessions_by_LoginEntity xsi:nil=\'true\'/>';
       } else {
        xml = xml + this._Get_Sessions_by_LoginEntity[ax].serialize(cxfjsutils, 'jns1:Get_Sessions_by_LoginEntity', null);
       }
      }
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

datumnode_com_start_start_ip_radius_ArrayOfGet_Sessions_by_LoginEntity.prototype.serialize = datumnode_com_start_start_ip_radius_ArrayOfGet_Sessions_by_LoginEntity_serialize;

function datumnode_com_start_start_ip_radius_ArrayOfGet_Sessions_by_LoginEntity_deserialize (cxfjsutils, element) {
    var newobject = new datumnode_com_start_start_ip_radius_ArrayOfGet_Sessions_by_LoginEntity();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Get_Sessions_by_LoginEntity');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'Get_Sessions_by_LoginEntity')) {
     item = [];
     do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       arrayItem = datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity_deserialize(cxfjsutils, curElement);
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'Get_Sessions_by_LoginEntity'));
     newobject.setGet_Sessions_by_LoginEntity(item);
     var item = null;
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://datumnode.com/start/start_ip/radius}Get_Access_SysdateRequest
//
function datumnode_com_start_start_ip_radius_Get_Access_SysdateRequest () {
    this.typeMarker = 'datumnode_com_start_start_ip_radius_Get_Access_SysdateRequest';
    this._Id = null;
    this._Connection = null;
    this._Command = null;
    this._Parameters = null;
}

//
// accessor is datumnode_com_start_start_ip_radius_Get_Access_SysdateRequest.prototype.getId
// element get for Id
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - optional element
//
// element set for Id
// setter function is is datumnode_com_start_start_ip_radius_Get_Access_SysdateRequest.prototype.setId
//
function datumnode_com_start_start_ip_radius_Get_Access_SysdateRequest_getId() { return this._Id;}

datumnode_com_start_start_ip_radius_Get_Access_SysdateRequest.prototype.getId = datumnode_com_start_start_ip_radius_Get_Access_SysdateRequest_getId;

function datumnode_com_start_start_ip_radius_Get_Access_SysdateRequest_setId(value) { this._Id = value;}

datumnode_com_start_start_ip_radius_Get_Access_SysdateRequest.prototype.setId = datumnode_com_start_start_ip_radius_Get_Access_SysdateRequest_setId;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Access_SysdateRequest.prototype.getConnection
// element get for Connection
// - element type is {DatumNode}MetaConnection
// - optional element
//
// element set for Connection
// setter function is is datumnode_com_start_start_ip_radius_Get_Access_SysdateRequest.prototype.setConnection
//
function datumnode_com_start_start_ip_radius_Get_Access_SysdateRequest_getConnection() { return this._Connection;}

datumnode_com_start_start_ip_radius_Get_Access_SysdateRequest.prototype.getConnection = datumnode_com_start_start_ip_radius_Get_Access_SysdateRequest_getConnection;

function datumnode_com_start_start_ip_radius_Get_Access_SysdateRequest_setConnection(value) { this._Connection = value;}

datumnode_com_start_start_ip_radius_Get_Access_SysdateRequest.prototype.setConnection = datumnode_com_start_start_ip_radius_Get_Access_SysdateRequest_setConnection;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Access_SysdateRequest.prototype.getCommand
// element get for Command
// - element type is {DatumNode}MetaCommand
// - optional element
//
// element set for Command
// setter function is is datumnode_com_start_start_ip_radius_Get_Access_SysdateRequest.prototype.setCommand
//
function datumnode_com_start_start_ip_radius_Get_Access_SysdateRequest_getCommand() { return this._Command;}

datumnode_com_start_start_ip_radius_Get_Access_SysdateRequest.prototype.getCommand = datumnode_com_start_start_ip_radius_Get_Access_SysdateRequest_getCommand;

function datumnode_com_start_start_ip_radius_Get_Access_SysdateRequest_setCommand(value) { this._Command = value;}

datumnode_com_start_start_ip_radius_Get_Access_SysdateRequest.prototype.setCommand = datumnode_com_start_start_ip_radius_Get_Access_SysdateRequest_setCommand;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Access_SysdateRequest.prototype.getParameters
// element get for Parameters
// - element type is {http://datumnode.com/start/start_ip/radius}Get_Access_SysdateInputParameters
// - optional element
//
// element set for Parameters
// setter function is is datumnode_com_start_start_ip_radius_Get_Access_SysdateRequest.prototype.setParameters
//
function datumnode_com_start_start_ip_radius_Get_Access_SysdateRequest_getParameters() { return this._Parameters;}

datumnode_com_start_start_ip_radius_Get_Access_SysdateRequest.prototype.getParameters = datumnode_com_start_start_ip_radius_Get_Access_SysdateRequest_getParameters;

function datumnode_com_start_start_ip_radius_Get_Access_SysdateRequest_setParameters(value) { this._Parameters = value;}

datumnode_com_start_start_ip_radius_Get_Access_SysdateRequest.prototype.setParameters = datumnode_com_start_start_ip_radius_Get_Access_SysdateRequest_setParameters;
//
// Serialize {http://datumnode.com/start/start_ip/radius}Get_Access_SysdateRequest
//
function datumnode_com_start_start_ip_radius_Get_Access_SysdateRequest_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'DatumNode\' xmlns:jns1=\'http://datumnode.com/start/start_ip/radius\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._Id != null) {
      xml = xml + '<jns1:Id>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._Id);
      xml = xml + '</jns1:Id>';
     }
    }
    // block for local variables
    {
     if (this._Connection != null) {
      xml = xml + this._Connection.serialize(cxfjsutils, 'jns0:Connection', null);
     }
    }
    // block for local variables
    {
     if (this._Command != null) {
      xml = xml + this._Command.serialize(cxfjsutils, 'jns0:Command', null);
     }
    }
    // block for local variables
    {
     if (this._Parameters != null) {
      xml = xml + this._Parameters.serialize(cxfjsutils, 'jns1:Parameters', null);
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

datumnode_com_start_start_ip_radius_Get_Access_SysdateRequest.prototype.serialize = datumnode_com_start_start_ip_radius_Get_Access_SysdateRequest_serialize;

function datumnode_com_start_start_ip_radius_Get_Access_SysdateRequest_deserialize (cxfjsutils, element) {
    var newobject = new datumnode_com_start_start_ip_radius_Get_Access_SysdateRequest();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Id');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'Id')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = parseInt(value);
     }
     newobject.setId(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Connection');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'DatumNode', 'Connection')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = DN_MetaConnection_deserialize(cxfjsutils, curElement);
     }
     newobject.setConnection(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Command');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'DatumNode', 'Command')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = DN_MetaCommand_deserialize(cxfjsutils, curElement);
     }
     newobject.setCommand(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Parameters');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'Parameters')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = datumnode_com_start_start_ip_radius_Get_Access_SysdateInputParameters_deserialize(cxfjsutils, curElement);
     }
     newobject.setParameters(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://datumnode.com/start/start_ip/radius}Check_ProfileRequest
//
function datumnode_com_start_start_ip_radius_Check_ProfileRequest () {
    this.typeMarker = 'datumnode_com_start_start_ip_radius_Check_ProfileRequest';
    this._Id = null;
    this._Connection = null;
    this._Command = null;
    this._Parameters = null;
}

//
// accessor is datumnode_com_start_start_ip_radius_Check_ProfileRequest.prototype.getId
// element get for Id
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - optional element
//
// element set for Id
// setter function is is datumnode_com_start_start_ip_radius_Check_ProfileRequest.prototype.setId
//
function datumnode_com_start_start_ip_radius_Check_ProfileRequest_getId() { return this._Id;}

datumnode_com_start_start_ip_radius_Check_ProfileRequest.prototype.getId = datumnode_com_start_start_ip_radius_Check_ProfileRequest_getId;

function datumnode_com_start_start_ip_radius_Check_ProfileRequest_setId(value) { this._Id = value;}

datumnode_com_start_start_ip_radius_Check_ProfileRequest.prototype.setId = datumnode_com_start_start_ip_radius_Check_ProfileRequest_setId;
//
// accessor is datumnode_com_start_start_ip_radius_Check_ProfileRequest.prototype.getConnection
// element get for Connection
// - element type is {DatumNode}MetaConnection
// - optional element
//
// element set for Connection
// setter function is is datumnode_com_start_start_ip_radius_Check_ProfileRequest.prototype.setConnection
//
function datumnode_com_start_start_ip_radius_Check_ProfileRequest_getConnection() { return this._Connection;}

datumnode_com_start_start_ip_radius_Check_ProfileRequest.prototype.getConnection = datumnode_com_start_start_ip_radius_Check_ProfileRequest_getConnection;

function datumnode_com_start_start_ip_radius_Check_ProfileRequest_setConnection(value) { this._Connection = value;}

datumnode_com_start_start_ip_radius_Check_ProfileRequest.prototype.setConnection = datumnode_com_start_start_ip_radius_Check_ProfileRequest_setConnection;
//
// accessor is datumnode_com_start_start_ip_radius_Check_ProfileRequest.prototype.getCommand
// element get for Command
// - element type is {DatumNode}MetaCommand
// - optional element
//
// element set for Command
// setter function is is datumnode_com_start_start_ip_radius_Check_ProfileRequest.prototype.setCommand
//
function datumnode_com_start_start_ip_radius_Check_ProfileRequest_getCommand() { return this._Command;}

datumnode_com_start_start_ip_radius_Check_ProfileRequest.prototype.getCommand = datumnode_com_start_start_ip_radius_Check_ProfileRequest_getCommand;

function datumnode_com_start_start_ip_radius_Check_ProfileRequest_setCommand(value) { this._Command = value;}

datumnode_com_start_start_ip_radius_Check_ProfileRequest.prototype.setCommand = datumnode_com_start_start_ip_radius_Check_ProfileRequest_setCommand;
//
// accessor is datumnode_com_start_start_ip_radius_Check_ProfileRequest.prototype.getParameters
// element get for Parameters
// - element type is {http://datumnode.com/start/start_ip/radius}Check_ProfileInputParameters
// - optional element
//
// element set for Parameters
// setter function is is datumnode_com_start_start_ip_radius_Check_ProfileRequest.prototype.setParameters
//
function datumnode_com_start_start_ip_radius_Check_ProfileRequest_getParameters() { return this._Parameters;}

datumnode_com_start_start_ip_radius_Check_ProfileRequest.prototype.getParameters = datumnode_com_start_start_ip_radius_Check_ProfileRequest_getParameters;

function datumnode_com_start_start_ip_radius_Check_ProfileRequest_setParameters(value) { this._Parameters = value;}

datumnode_com_start_start_ip_radius_Check_ProfileRequest.prototype.setParameters = datumnode_com_start_start_ip_radius_Check_ProfileRequest_setParameters;
//
// Serialize {http://datumnode.com/start/start_ip/radius}Check_ProfileRequest
//
function datumnode_com_start_start_ip_radius_Check_ProfileRequest_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'DatumNode\' xmlns:jns1=\'http://datumnode.com/start/start_ip/radius\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._Id != null) {
      xml = xml + '<jns1:Id>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._Id);
      xml = xml + '</jns1:Id>';
     }
    }
    // block for local variables
    {
     if (this._Connection != null) {
      xml = xml + this._Connection.serialize(cxfjsutils, 'jns0:Connection', null);
     }
    }
    // block for local variables
    {
     if (this._Command != null) {
      xml = xml + this._Command.serialize(cxfjsutils, 'jns0:Command', null);
     }
    }
    // block for local variables
    {
     if (this._Parameters != null) {
      xml = xml + this._Parameters.serialize(cxfjsutils, 'jns1:Parameters', null);
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

datumnode_com_start_start_ip_radius_Check_ProfileRequest.prototype.serialize = datumnode_com_start_start_ip_radius_Check_ProfileRequest_serialize;

function datumnode_com_start_start_ip_radius_Check_ProfileRequest_deserialize (cxfjsutils, element) {
    var newobject = new datumnode_com_start_start_ip_radius_Check_ProfileRequest();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Id');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'Id')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = parseInt(value);
     }
     newobject.setId(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Connection');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'DatumNode', 'Connection')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = DN_MetaConnection_deserialize(cxfjsutils, curElement);
     }
     newobject.setConnection(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Command');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'DatumNode', 'Command')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = DN_MetaCommand_deserialize(cxfjsutils, curElement);
     }
     newobject.setCommand(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Parameters');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'Parameters')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = datumnode_com_start_start_ip_radius_Check_ProfileInputParameters_deserialize(cxfjsutils, curElement);
     }
     newobject.setParameters(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://datumnode.com/start/start_ip/radius}Get_Access_by_LoginOutputParameters
//
function datumnode_com_start_start_ip_radius_Get_Access_by_LoginOutputParameters () {
    this.typeMarker = 'datumnode_com_start_start_ip_radius_Get_Access_by_LoginOutputParameters';
}

//
// Serialize {http://datumnode.com/start/start_ip/radius}Get_Access_by_LoginOutputParameters
//
function datumnode_com_start_start_ip_radius_Get_Access_by_LoginOutputParameters_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'DatumNode\' xmlns:jns1=\'http://datumnode.com/start/start_ip/radius\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

datumnode_com_start_start_ip_radius_Get_Access_by_LoginOutputParameters.prototype.serialize = datumnode_com_start_start_ip_radius_Get_Access_by_LoginOutputParameters_serialize;

function datumnode_com_start_start_ip_radius_Get_Access_by_LoginOutputParameters_deserialize (cxfjsutils, element) {
    var newobject = new datumnode_com_start_start_ip_radius_Get_Access_by_LoginOutputParameters();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    return newobject;
}

//
// Constructor for XML Schema item {http://datumnode.com/start/start_ip/radius}Get_Dev_LoginEntity
//
function datumnode_com_start_start_ip_radius_Get_Dev_LoginEntity () {
    this.typeMarker = 'datumnode_com_start_start_ip_radius_Get_Dev_LoginEntity';
    this._service_id = null;
    this._user_login = null;
    this._dsl_login_id = null;
    this._date_begin = null;
    this._date_end = null;
    this._user_id = null;
    this._user_tarif = null;
    this._dev_id = null;
}

//
// accessor is datumnode_com_start_start_ip_radius_Get_Dev_LoginEntity.prototype.getService_id
// element get for service_id
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for service_id
// setter function is is datumnode_com_start_start_ip_radius_Get_Dev_LoginEntity.prototype.setService_id
//
function datumnode_com_start_start_ip_radius_Get_Dev_LoginEntity_getService_id() { return this._service_id;}

datumnode_com_start_start_ip_radius_Get_Dev_LoginEntity.prototype.getService_id = datumnode_com_start_start_ip_radius_Get_Dev_LoginEntity_getService_id;

function datumnode_com_start_start_ip_radius_Get_Dev_LoginEntity_setService_id(value) { this._service_id = value;}

datumnode_com_start_start_ip_radius_Get_Dev_LoginEntity.prototype.setService_id = datumnode_com_start_start_ip_radius_Get_Dev_LoginEntity_setService_id;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Dev_LoginEntity.prototype.getUser_login
// element get for user_login
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for user_login
// setter function is is datumnode_com_start_start_ip_radius_Get_Dev_LoginEntity.prototype.setUser_login
//
function datumnode_com_start_start_ip_radius_Get_Dev_LoginEntity_getUser_login() { return this._user_login;}

datumnode_com_start_start_ip_radius_Get_Dev_LoginEntity.prototype.getUser_login = datumnode_com_start_start_ip_radius_Get_Dev_LoginEntity_getUser_login;

function datumnode_com_start_start_ip_radius_Get_Dev_LoginEntity_setUser_login(value) { this._user_login = value;}

datumnode_com_start_start_ip_radius_Get_Dev_LoginEntity.prototype.setUser_login = datumnode_com_start_start_ip_radius_Get_Dev_LoginEntity_setUser_login;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Dev_LoginEntity.prototype.getDsl_login_id
// element get for dsl_login_id
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for dsl_login_id
// setter function is is datumnode_com_start_start_ip_radius_Get_Dev_LoginEntity.prototype.setDsl_login_id
//
function datumnode_com_start_start_ip_radius_Get_Dev_LoginEntity_getDsl_login_id() { return this._dsl_login_id;}

datumnode_com_start_start_ip_radius_Get_Dev_LoginEntity.prototype.getDsl_login_id = datumnode_com_start_start_ip_radius_Get_Dev_LoginEntity_getDsl_login_id;

function datumnode_com_start_start_ip_radius_Get_Dev_LoginEntity_setDsl_login_id(value) { this._dsl_login_id = value;}

datumnode_com_start_start_ip_radius_Get_Dev_LoginEntity.prototype.setDsl_login_id = datumnode_com_start_start_ip_radius_Get_Dev_LoginEntity_setDsl_login_id;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Dev_LoginEntity.prototype.getDate_begin
// element get for date_begin
// - element type is {http://www.w3.org/2001/XMLSchema}dateTime
// - required element
// - nillable
//
// element set for date_begin
// setter function is is datumnode_com_start_start_ip_radius_Get_Dev_LoginEntity.prototype.setDate_begin
//
function datumnode_com_start_start_ip_radius_Get_Dev_LoginEntity_getDate_begin() { return this._date_begin;}

datumnode_com_start_start_ip_radius_Get_Dev_LoginEntity.prototype.getDate_begin = datumnode_com_start_start_ip_radius_Get_Dev_LoginEntity_getDate_begin;

function datumnode_com_start_start_ip_radius_Get_Dev_LoginEntity_setDate_begin(value) { this._date_begin = value;}

datumnode_com_start_start_ip_radius_Get_Dev_LoginEntity.prototype.setDate_begin = datumnode_com_start_start_ip_radius_Get_Dev_LoginEntity_setDate_begin;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Dev_LoginEntity.prototype.getDate_end
// element get for date_end
// - element type is {http://www.w3.org/2001/XMLSchema}dateTime
// - required element
// - nillable
//
// element set for date_end
// setter function is is datumnode_com_start_start_ip_radius_Get_Dev_LoginEntity.prototype.setDate_end
//
function datumnode_com_start_start_ip_radius_Get_Dev_LoginEntity_getDate_end() { return this._date_end;}

datumnode_com_start_start_ip_radius_Get_Dev_LoginEntity.prototype.getDate_end = datumnode_com_start_start_ip_radius_Get_Dev_LoginEntity_getDate_end;

function datumnode_com_start_start_ip_radius_Get_Dev_LoginEntity_setDate_end(value) { this._date_end = value;}

datumnode_com_start_start_ip_radius_Get_Dev_LoginEntity.prototype.setDate_end = datumnode_com_start_start_ip_radius_Get_Dev_LoginEntity_setDate_end;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Dev_LoginEntity.prototype.getUser_id
// element get for user_id
// - element type is {http://www.w3.org/2001/XMLSchema}decimal
// - required element
// - nillable
//
// element set for user_id
// setter function is is datumnode_com_start_start_ip_radius_Get_Dev_LoginEntity.prototype.setUser_id
//
function datumnode_com_start_start_ip_radius_Get_Dev_LoginEntity_getUser_id() { return this._user_id;}

datumnode_com_start_start_ip_radius_Get_Dev_LoginEntity.prototype.getUser_id = datumnode_com_start_start_ip_radius_Get_Dev_LoginEntity_getUser_id;

function datumnode_com_start_start_ip_radius_Get_Dev_LoginEntity_setUser_id(value) { this._user_id = value;}

datumnode_com_start_start_ip_radius_Get_Dev_LoginEntity.prototype.setUser_id = datumnode_com_start_start_ip_radius_Get_Dev_LoginEntity_setUser_id;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Dev_LoginEntity.prototype.getUser_tarif
// element get for user_tarif
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for user_tarif
// setter function is is datumnode_com_start_start_ip_radius_Get_Dev_LoginEntity.prototype.setUser_tarif
//
function datumnode_com_start_start_ip_radius_Get_Dev_LoginEntity_getUser_tarif() { return this._user_tarif;}

datumnode_com_start_start_ip_radius_Get_Dev_LoginEntity.prototype.getUser_tarif = datumnode_com_start_start_ip_radius_Get_Dev_LoginEntity_getUser_tarif;

function datumnode_com_start_start_ip_radius_Get_Dev_LoginEntity_setUser_tarif(value) { this._user_tarif = value;}

datumnode_com_start_start_ip_radius_Get_Dev_LoginEntity.prototype.setUser_tarif = datumnode_com_start_start_ip_radius_Get_Dev_LoginEntity_setUser_tarif;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Dev_LoginEntity.prototype.getDev_id
// element get for dev_id
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for dev_id
// setter function is is datumnode_com_start_start_ip_radius_Get_Dev_LoginEntity.prototype.setDev_id
//
function datumnode_com_start_start_ip_radius_Get_Dev_LoginEntity_getDev_id() { return this._dev_id;}

datumnode_com_start_start_ip_radius_Get_Dev_LoginEntity.prototype.getDev_id = datumnode_com_start_start_ip_radius_Get_Dev_LoginEntity_getDev_id;

function datumnode_com_start_start_ip_radius_Get_Dev_LoginEntity_setDev_id(value) { this._dev_id = value;}

datumnode_com_start_start_ip_radius_Get_Dev_LoginEntity.prototype.setDev_id = datumnode_com_start_start_ip_radius_Get_Dev_LoginEntity_setDev_id;
//
// Serialize {http://datumnode.com/start/start_ip/radius}Get_Dev_LoginEntity
//
function datumnode_com_start_start_ip_radius_Get_Dev_LoginEntity_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'DatumNode\' xmlns:jns1=\'http://datumnode.com/start/start_ip/radius\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._service_id != null) {
      xml = xml + '<jns1:service_id>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._service_id);
      xml = xml + '</jns1:service_id>';
     }
    }
    // block for local variables
    {
     if (this._user_login != null) {
      xml = xml + '<jns1:user_login>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._user_login);
      xml = xml + '</jns1:user_login>';
     }
    }
    // block for local variables
    {
     if (this._dsl_login_id != null) {
      xml = xml + '<jns1:dsl_login_id>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._dsl_login_id);
      xml = xml + '</jns1:dsl_login_id>';
     }
    }
    // block for local variables
    {
     if (this._date_begin == null) {
      xml = xml + '<jns1:date_begin xsi:nil=\'true\'/>';
     } else {
      xml = xml + '<jns1:date_begin>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._date_begin);
      xml = xml + '</jns1:date_begin>';
     }
    }
    // block for local variables
    {
     if (this._date_end == null) {
      xml = xml + '<jns1:date_end xsi:nil=\'true\'/>';
     } else {
      xml = xml + '<jns1:date_end>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._date_end);
      xml = xml + '</jns1:date_end>';
     }
    }
    // block for local variables
    {
     if (this._user_id == null) {
      xml = xml + '<jns1:user_id xsi:nil=\'true\'/>';
     } else {
      xml = xml + '<jns1:user_id>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._user_id);
      xml = xml + '</jns1:user_id>';
     }
    }
    // block for local variables
    {
     if (this._user_tarif != null) {
      xml = xml + '<jns1:user_tarif>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._user_tarif);
      xml = xml + '</jns1:user_tarif>';
     }
    }
    // block for local variables
    {
     if (this._dev_id != null) {
      xml = xml + '<jns1:dev_id>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._dev_id);
      xml = xml + '</jns1:dev_id>';
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

datumnode_com_start_start_ip_radius_Get_Dev_LoginEntity.prototype.serialize = datumnode_com_start_start_ip_radius_Get_Dev_LoginEntity_serialize;

function datumnode_com_start_start_ip_radius_Get_Dev_LoginEntity_deserialize (cxfjsutils, element) {
    var newobject = new datumnode_com_start_start_ip_radius_Get_Dev_LoginEntity();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing service_id');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'service_id')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setService_id(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing user_login');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'user_login')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setUser_login(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing dsl_login_id');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'dsl_login_id')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setDsl_login_id(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing date_begin');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setDate_begin(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing date_end');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setDate_end(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing user_id');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setUser_id(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing user_tarif');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'user_tarif')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setUser_tarif(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing dev_id');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'dev_id')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setDev_id(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://datumnode.com/start/start_ip/radius}ArrayOfGet_Access_by_Login_SysEntity
//
function datumnode_com_start_start_ip_radius_ArrayOfGet_Access_by_Login_SysEntity () {
    this.typeMarker = 'datumnode_com_start_start_ip_radius_ArrayOfGet_Access_by_Login_SysEntity';
    this._Get_Access_by_Login_SysEntity = [];
}

//
// accessor is datumnode_com_start_start_ip_radius_ArrayOfGet_Access_by_Login_SysEntity.prototype.getGet_Access_by_Login_SysEntity
// element get for Get_Access_by_Login_SysEntity
// - element type is {http://datumnode.com/start/start_ip/radius}Get_Access_by_Login_SysEntity
// - required element
// - array
// - nillable
//
// element set for Get_Access_by_Login_SysEntity
// setter function is is datumnode_com_start_start_ip_radius_ArrayOfGet_Access_by_Login_SysEntity.prototype.setGet_Access_by_Login_SysEntity
//
function datumnode_com_start_start_ip_radius_ArrayOfGet_Access_by_Login_SysEntity_getGet_Access_by_Login_SysEntity() { return this._Get_Access_by_Login_SysEntity;}

datumnode_com_start_start_ip_radius_ArrayOfGet_Access_by_Login_SysEntity.prototype.getGet_Access_by_Login_SysEntity = datumnode_com_start_start_ip_radius_ArrayOfGet_Access_by_Login_SysEntity_getGet_Access_by_Login_SysEntity;

function datumnode_com_start_start_ip_radius_ArrayOfGet_Access_by_Login_SysEntity_setGet_Access_by_Login_SysEntity(value) { this._Get_Access_by_Login_SysEntity = value;}

datumnode_com_start_start_ip_radius_ArrayOfGet_Access_by_Login_SysEntity.prototype.setGet_Access_by_Login_SysEntity = datumnode_com_start_start_ip_radius_ArrayOfGet_Access_by_Login_SysEntity_setGet_Access_by_Login_SysEntity;
//
// Serialize {http://datumnode.com/start/start_ip/radius}ArrayOfGet_Access_by_Login_SysEntity
//
function datumnode_com_start_start_ip_radius_ArrayOfGet_Access_by_Login_SysEntity_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'DatumNode\' xmlns:jns1=\'http://datumnode.com/start/start_ip/radius\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._Get_Access_by_Login_SysEntity != null) {
      for (var ax = 0;ax < this._Get_Access_by_Login_SysEntity.length;ax ++) {
       if (this._Get_Access_by_Login_SysEntity[ax] == null) {
        xml = xml + '<jns1:Get_Access_by_Login_SysEntity xsi:nil=\'true\'/>';
       } else {
        xml = xml + this._Get_Access_by_Login_SysEntity[ax].serialize(cxfjsutils, 'jns1:Get_Access_by_Login_SysEntity', null);
       }
      }
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

datumnode_com_start_start_ip_radius_ArrayOfGet_Access_by_Login_SysEntity.prototype.serialize = datumnode_com_start_start_ip_radius_ArrayOfGet_Access_by_Login_SysEntity_serialize;

function datumnode_com_start_start_ip_radius_ArrayOfGet_Access_by_Login_SysEntity_deserialize (cxfjsutils, element) {
    var newobject = new datumnode_com_start_start_ip_radius_ArrayOfGet_Access_by_Login_SysEntity();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Get_Access_by_Login_SysEntity');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'Get_Access_by_Login_SysEntity')) {
     item = [];
     do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       arrayItem = datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysEntity_deserialize(cxfjsutils, curElement);
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'Get_Access_by_Login_SysEntity'));
     newobject.setGet_Access_by_Login_SysEntity(item);
     var item = null;
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://datumnode.com/start/start_ip/radius}Get_Sessions_by_LoginInputParameters
//
function datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginInputParameters () {
    this.typeMarker = 'datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginInputParameters';
    this._p_Filial = null;
    this._p_Date_Beg = null;
    this._p_Date_End = null;
    this._p_Login = null;
}

//
// accessor is datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginInputParameters.prototype.getP_Filial
// element get for p_Filial
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for p_Filial
// setter function is is datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginInputParameters.prototype.setP_Filial
//
function datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginInputParameters_getP_Filial() { return this._p_Filial;}

datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginInputParameters.prototype.getP_Filial = datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginInputParameters_getP_Filial;

function datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginInputParameters_setP_Filial(value) { this._p_Filial = value;}

datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginInputParameters.prototype.setP_Filial = datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginInputParameters_setP_Filial;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginInputParameters.prototype.getP_Date_Beg
// element get for p_Date_Beg
// - element type is {http://www.w3.org/2001/XMLSchema}dateTime
// - required element
// - nillable
//
// element set for p_Date_Beg
// setter function is is datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginInputParameters.prototype.setP_Date_Beg
//
function datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginInputParameters_getP_Date_Beg() { return this._p_Date_Beg;}

datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginInputParameters.prototype.getP_Date_Beg = datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginInputParameters_getP_Date_Beg;

function datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginInputParameters_setP_Date_Beg(value) { this._p_Date_Beg = value;}

datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginInputParameters.prototype.setP_Date_Beg = datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginInputParameters_setP_Date_Beg;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginInputParameters.prototype.getP_Date_End
// element get for p_Date_End
// - element type is {http://www.w3.org/2001/XMLSchema}dateTime
// - required element
// - nillable
//
// element set for p_Date_End
// setter function is is datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginInputParameters.prototype.setP_Date_End
//
function datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginInputParameters_getP_Date_End() { return this._p_Date_End;}

datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginInputParameters.prototype.getP_Date_End = datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginInputParameters_getP_Date_End;

function datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginInputParameters_setP_Date_End(value) { this._p_Date_End = value;}

datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginInputParameters.prototype.setP_Date_End = datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginInputParameters_setP_Date_End;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginInputParameters.prototype.getP_Login
// element get for p_Login
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for p_Login
// setter function is is datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginInputParameters.prototype.setP_Login
//
function datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginInputParameters_getP_Login() { return this._p_Login;}

datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginInputParameters.prototype.getP_Login = datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginInputParameters_getP_Login;

function datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginInputParameters_setP_Login(value) { this._p_Login = value;}

datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginInputParameters.prototype.setP_Login = datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginInputParameters_setP_Login;
//
// Serialize {http://datumnode.com/start/start_ip/radius}Get_Sessions_by_LoginInputParameters
//
function datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginInputParameters_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'DatumNode\' xmlns:jns1=\'http://datumnode.com/start/start_ip/radius\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._p_Filial != null) {
      xml = xml + '<jns1:p_Filial>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._p_Filial);
      xml = xml + '</jns1:p_Filial>';
     }
    }
    // block for local variables
    {
     if (this._p_Date_Beg == null) {
      xml = xml + '<jns1:p_Date_Beg xsi:nil=\'true\'/>';
     } else {
      xml = xml + '<jns1:p_Date_Beg>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._p_Date_Beg);
      xml = xml + '</jns1:p_Date_Beg>';
     }
    }
    // block for local variables
    {
     if (this._p_Date_End == null) {
      xml = xml + '<jns1:p_Date_End xsi:nil=\'true\'/>';
     } else {
      xml = xml + '<jns1:p_Date_End>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._p_Date_End);
      xml = xml + '</jns1:p_Date_End>';
     }
    }
    // block for local variables
    {
     if (this._p_Login != null) {
      xml = xml + '<jns1:p_Login>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._p_Login);
      xml = xml + '</jns1:p_Login>';
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginInputParameters.prototype.serialize = datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginInputParameters_serialize;

function datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginInputParameters_deserialize (cxfjsutils, element) {
    var newobject = new datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginInputParameters();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing p_Filial');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'p_Filial')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setP_Filial(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing p_Date_Beg');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setP_Date_Beg(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing p_Date_End');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setP_Date_End(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing p_Login');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'p_Login')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setP_Login(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://datumnode.com/start/start_ip/radius}Get_Traffic_by_LoginOutputParameters
//
function datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginOutputParameters () {
    this.typeMarker = 'datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginOutputParameters';
}

//
// Serialize {http://datumnode.com/start/start_ip/radius}Get_Traffic_by_LoginOutputParameters
//
function datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginOutputParameters_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'DatumNode\' xmlns:jns1=\'http://datumnode.com/start/start_ip/radius\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginOutputParameters.prototype.serialize = datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginOutputParameters_serialize;

function datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginOutputParameters_deserialize (cxfjsutils, element) {
    var newobject = new datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginOutputParameters();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    return newobject;
}

//
// Constructor for XML Schema item {http://datumnode.com/start/start_ip/radius}ArrayOfGet_Access_SysdateEntity
//
function datumnode_com_start_start_ip_radius_ArrayOfGet_Access_SysdateEntity () {
    this.typeMarker = 'datumnode_com_start_start_ip_radius_ArrayOfGet_Access_SysdateEntity';
    this._Get_Access_SysdateEntity = [];
}

//
// accessor is datumnode_com_start_start_ip_radius_ArrayOfGet_Access_SysdateEntity.prototype.getGet_Access_SysdateEntity
// element get for Get_Access_SysdateEntity
// - element type is {http://datumnode.com/start/start_ip/radius}Get_Access_SysdateEntity
// - required element
// - array
// - nillable
//
// element set for Get_Access_SysdateEntity
// setter function is is datumnode_com_start_start_ip_radius_ArrayOfGet_Access_SysdateEntity.prototype.setGet_Access_SysdateEntity
//
function datumnode_com_start_start_ip_radius_ArrayOfGet_Access_SysdateEntity_getGet_Access_SysdateEntity() { return this._Get_Access_SysdateEntity;}

datumnode_com_start_start_ip_radius_ArrayOfGet_Access_SysdateEntity.prototype.getGet_Access_SysdateEntity = datumnode_com_start_start_ip_radius_ArrayOfGet_Access_SysdateEntity_getGet_Access_SysdateEntity;

function datumnode_com_start_start_ip_radius_ArrayOfGet_Access_SysdateEntity_setGet_Access_SysdateEntity(value) { this._Get_Access_SysdateEntity = value;}

datumnode_com_start_start_ip_radius_ArrayOfGet_Access_SysdateEntity.prototype.setGet_Access_SysdateEntity = datumnode_com_start_start_ip_radius_ArrayOfGet_Access_SysdateEntity_setGet_Access_SysdateEntity;
//
// Serialize {http://datumnode.com/start/start_ip/radius}ArrayOfGet_Access_SysdateEntity
//
function datumnode_com_start_start_ip_radius_ArrayOfGet_Access_SysdateEntity_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'DatumNode\' xmlns:jns1=\'http://datumnode.com/start/start_ip/radius\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._Get_Access_SysdateEntity != null) {
      for (var ax = 0;ax < this._Get_Access_SysdateEntity.length;ax ++) {
       if (this._Get_Access_SysdateEntity[ax] == null) {
        xml = xml + '<jns1:Get_Access_SysdateEntity xsi:nil=\'true\'/>';
       } else {
        xml = xml + this._Get_Access_SysdateEntity[ax].serialize(cxfjsutils, 'jns1:Get_Access_SysdateEntity', null);
       }
      }
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

datumnode_com_start_start_ip_radius_ArrayOfGet_Access_SysdateEntity.prototype.serialize = datumnode_com_start_start_ip_radius_ArrayOfGet_Access_SysdateEntity_serialize;

function datumnode_com_start_start_ip_radius_ArrayOfGet_Access_SysdateEntity_deserialize (cxfjsutils, element) {
    var newobject = new datumnode_com_start_start_ip_radius_ArrayOfGet_Access_SysdateEntity();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Get_Access_SysdateEntity');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'Get_Access_SysdateEntity')) {
     item = [];
     do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       arrayItem = datumnode_com_start_start_ip_radius_Get_Access_SysdateEntity_deserialize(cxfjsutils, curElement);
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'Get_Access_SysdateEntity'));
     newobject.setGet_Access_SysdateEntity(item);
     var item = null;
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://datumnode.com/start/start_ip/radius}Change_PasswordInputParameters
//
function datumnode_com_start_start_ip_radius_Change_PasswordInputParameters () {
    this.typeMarker = 'datumnode_com_start_start_ip_radius_Change_PasswordInputParameters';
    this._p_Filial = null;
    this._p_Login = null;
    this._p_New_Pass = null;
    this._p_Old_Pass = null;
    this._p_Pin_Code = null;
}

//
// accessor is datumnode_com_start_start_ip_radius_Change_PasswordInputParameters.prototype.getP_Filial
// element get for p_Filial
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for p_Filial
// setter function is is datumnode_com_start_start_ip_radius_Change_PasswordInputParameters.prototype.setP_Filial
//
function datumnode_com_start_start_ip_radius_Change_PasswordInputParameters_getP_Filial() { return this._p_Filial;}

datumnode_com_start_start_ip_radius_Change_PasswordInputParameters.prototype.getP_Filial = datumnode_com_start_start_ip_radius_Change_PasswordInputParameters_getP_Filial;

function datumnode_com_start_start_ip_radius_Change_PasswordInputParameters_setP_Filial(value) { this._p_Filial = value;}

datumnode_com_start_start_ip_radius_Change_PasswordInputParameters.prototype.setP_Filial = datumnode_com_start_start_ip_radius_Change_PasswordInputParameters_setP_Filial;
//
// accessor is datumnode_com_start_start_ip_radius_Change_PasswordInputParameters.prototype.getP_Login
// element get for p_Login
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for p_Login
// setter function is is datumnode_com_start_start_ip_radius_Change_PasswordInputParameters.prototype.setP_Login
//
function datumnode_com_start_start_ip_radius_Change_PasswordInputParameters_getP_Login() { return this._p_Login;}

datumnode_com_start_start_ip_radius_Change_PasswordInputParameters.prototype.getP_Login = datumnode_com_start_start_ip_radius_Change_PasswordInputParameters_getP_Login;

function datumnode_com_start_start_ip_radius_Change_PasswordInputParameters_setP_Login(value) { this._p_Login = value;}

datumnode_com_start_start_ip_radius_Change_PasswordInputParameters.prototype.setP_Login = datumnode_com_start_start_ip_radius_Change_PasswordInputParameters_setP_Login;
//
// accessor is datumnode_com_start_start_ip_radius_Change_PasswordInputParameters.prototype.getP_New_Pass
// element get for p_New_Pass
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for p_New_Pass
// setter function is is datumnode_com_start_start_ip_radius_Change_PasswordInputParameters.prototype.setP_New_Pass
//
function datumnode_com_start_start_ip_radius_Change_PasswordInputParameters_getP_New_Pass() { return this._p_New_Pass;}

datumnode_com_start_start_ip_radius_Change_PasswordInputParameters.prototype.getP_New_Pass = datumnode_com_start_start_ip_radius_Change_PasswordInputParameters_getP_New_Pass;

function datumnode_com_start_start_ip_radius_Change_PasswordInputParameters_setP_New_Pass(value) { this._p_New_Pass = value;}

datumnode_com_start_start_ip_radius_Change_PasswordInputParameters.prototype.setP_New_Pass = datumnode_com_start_start_ip_radius_Change_PasswordInputParameters_setP_New_Pass;
//
// accessor is datumnode_com_start_start_ip_radius_Change_PasswordInputParameters.prototype.getP_Old_Pass
// element get for p_Old_Pass
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for p_Old_Pass
// setter function is is datumnode_com_start_start_ip_radius_Change_PasswordInputParameters.prototype.setP_Old_Pass
//
function datumnode_com_start_start_ip_radius_Change_PasswordInputParameters_getP_Old_Pass() { return this._p_Old_Pass;}

datumnode_com_start_start_ip_radius_Change_PasswordInputParameters.prototype.getP_Old_Pass = datumnode_com_start_start_ip_radius_Change_PasswordInputParameters_getP_Old_Pass;

function datumnode_com_start_start_ip_radius_Change_PasswordInputParameters_setP_Old_Pass(value) { this._p_Old_Pass = value;}

datumnode_com_start_start_ip_radius_Change_PasswordInputParameters.prototype.setP_Old_Pass = datumnode_com_start_start_ip_radius_Change_PasswordInputParameters_setP_Old_Pass;
//
// accessor is datumnode_com_start_start_ip_radius_Change_PasswordInputParameters.prototype.getP_Pin_Code
// element get for p_Pin_Code
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for p_Pin_Code
// setter function is is datumnode_com_start_start_ip_radius_Change_PasswordInputParameters.prototype.setP_Pin_Code
//
function datumnode_com_start_start_ip_radius_Change_PasswordInputParameters_getP_Pin_Code() { return this._p_Pin_Code;}

datumnode_com_start_start_ip_radius_Change_PasswordInputParameters.prototype.getP_Pin_Code = datumnode_com_start_start_ip_radius_Change_PasswordInputParameters_getP_Pin_Code;

function datumnode_com_start_start_ip_radius_Change_PasswordInputParameters_setP_Pin_Code(value) { this._p_Pin_Code = value;}

datumnode_com_start_start_ip_radius_Change_PasswordInputParameters.prototype.setP_Pin_Code = datumnode_com_start_start_ip_radius_Change_PasswordInputParameters_setP_Pin_Code;
//
// Serialize {http://datumnode.com/start/start_ip/radius}Change_PasswordInputParameters
//
function datumnode_com_start_start_ip_radius_Change_PasswordInputParameters_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'DatumNode\' xmlns:jns1=\'http://datumnode.com/start/start_ip/radius\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._p_Filial != null) {
      xml = xml + '<jns1:p_Filial>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._p_Filial);
      xml = xml + '</jns1:p_Filial>';
     }
    }
    // block for local variables
    {
     if (this._p_Login != null) {
      xml = xml + '<jns1:p_Login>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._p_Login);
      xml = xml + '</jns1:p_Login>';
     }
    }
    // block for local variables
    {
     if (this._p_New_Pass != null) {
      xml = xml + '<jns1:p_New_Pass>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._p_New_Pass);
      xml = xml + '</jns1:p_New_Pass>';
     }
    }
    // block for local variables
    {
     if (this._p_Old_Pass != null) {
      xml = xml + '<jns1:p_Old_Pass>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._p_Old_Pass);
      xml = xml + '</jns1:p_Old_Pass>';
     }
    }
    // block for local variables
    {
     if (this._p_Pin_Code != null) {
      xml = xml + '<jns1:p_Pin_Code>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._p_Pin_Code);
      xml = xml + '</jns1:p_Pin_Code>';
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

datumnode_com_start_start_ip_radius_Change_PasswordInputParameters.prototype.serialize = datumnode_com_start_start_ip_radius_Change_PasswordInputParameters_serialize;

function datumnode_com_start_start_ip_radius_Change_PasswordInputParameters_deserialize (cxfjsutils, element) {
    var newobject = new datumnode_com_start_start_ip_radius_Change_PasswordInputParameters();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing p_Filial');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'p_Filial')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setP_Filial(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing p_Login');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'p_Login')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setP_Login(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing p_New_Pass');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'p_New_Pass')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setP_New_Pass(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing p_Old_Pass');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'p_Old_Pass')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setP_Old_Pass(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing p_Pin_Code');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'p_Pin_Code')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setP_Pin_Code(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://datumnode.com/start/start_ip/radius}Get_Traffic_by_LoginEntity
//
function datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginEntity () {
    this.typeMarker = 'datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginEntity';
    this._login = null;
    this._zone_start_date = null;
    this._zone_stop_date = null;
    this._code_value = null;
    this._bytes_in = null;
    this._bytes_out = null;
}

//
// accessor is datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginEntity.prototype.getLogin
// element get for login
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for login
// setter function is is datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginEntity.prototype.setLogin
//
function datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginEntity_getLogin() { return this._login;}

datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginEntity.prototype.getLogin = datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginEntity_getLogin;

function datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginEntity_setLogin(value) { this._login = value;}

datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginEntity.prototype.setLogin = datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginEntity_setLogin;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginEntity.prototype.getZone_start_date
// element get for zone_start_date
// - element type is {http://www.w3.org/2001/XMLSchema}dateTime
// - required element
// - nillable
//
// element set for zone_start_date
// setter function is is datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginEntity.prototype.setZone_start_date
//
function datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginEntity_getZone_start_date() { return this._zone_start_date;}

datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginEntity.prototype.getZone_start_date = datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginEntity_getZone_start_date;

function datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginEntity_setZone_start_date(value) { this._zone_start_date = value;}

datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginEntity.prototype.setZone_start_date = datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginEntity_setZone_start_date;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginEntity.prototype.getZone_stop_date
// element get for zone_stop_date
// - element type is {http://www.w3.org/2001/XMLSchema}dateTime
// - required element
// - nillable
//
// element set for zone_stop_date
// setter function is is datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginEntity.prototype.setZone_stop_date
//
function datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginEntity_getZone_stop_date() { return this._zone_stop_date;}

datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginEntity.prototype.getZone_stop_date = datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginEntity_getZone_stop_date;

function datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginEntity_setZone_stop_date(value) { this._zone_stop_date = value;}

datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginEntity.prototype.setZone_stop_date = datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginEntity_setZone_stop_date;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginEntity.prototype.getCode_value
// element get for code_value
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for code_value
// setter function is is datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginEntity.prototype.setCode_value
//
function datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginEntity_getCode_value() { return this._code_value;}

datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginEntity.prototype.getCode_value = datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginEntity_getCode_value;

function datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginEntity_setCode_value(value) { this._code_value = value;}

datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginEntity.prototype.setCode_value = datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginEntity_setCode_value;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginEntity.prototype.getBytes_in
// element get for bytes_in
// - element type is {http://www.w3.org/2001/XMLSchema}decimal
// - required element
// - nillable
//
// element set for bytes_in
// setter function is is datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginEntity.prototype.setBytes_in
//
function datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginEntity_getBytes_in() { return this._bytes_in;}

datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginEntity.prototype.getBytes_in = datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginEntity_getBytes_in;

function datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginEntity_setBytes_in(value) { this._bytes_in = value;}

datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginEntity.prototype.setBytes_in = datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginEntity_setBytes_in;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginEntity.prototype.getBytes_out
// element get for bytes_out
// - element type is {http://www.w3.org/2001/XMLSchema}decimal
// - required element
// - nillable
//
// element set for bytes_out
// setter function is is datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginEntity.prototype.setBytes_out
//
function datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginEntity_getBytes_out() { return this._bytes_out;}

datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginEntity.prototype.getBytes_out = datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginEntity_getBytes_out;

function datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginEntity_setBytes_out(value) { this._bytes_out = value;}

datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginEntity.prototype.setBytes_out = datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginEntity_setBytes_out;
//
// Serialize {http://datumnode.com/start/start_ip/radius}Get_Traffic_by_LoginEntity
//
function datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginEntity_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'DatumNode\' xmlns:jns1=\'http://datumnode.com/start/start_ip/radius\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._login != null) {
      xml = xml + '<jns1:login>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._login);
      xml = xml + '</jns1:login>';
     }
    }
    // block for local variables
    {
     if (this._zone_start_date == null) {
      xml = xml + '<jns1:zone_start_date xsi:nil=\'true\'/>';
     } else {
      xml = xml + '<jns1:zone_start_date>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._zone_start_date);
      xml = xml + '</jns1:zone_start_date>';
     }
    }
    // block for local variables
    {
     if (this._zone_stop_date == null) {
      xml = xml + '<jns1:zone_stop_date xsi:nil=\'true\'/>';
     } else {
      xml = xml + '<jns1:zone_stop_date>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._zone_stop_date);
      xml = xml + '</jns1:zone_stop_date>';
     }
    }
    // block for local variables
    {
     if (this._code_value != null) {
      xml = xml + '<jns1:code_value>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._code_value);
      xml = xml + '</jns1:code_value>';
     }
    }
    // block for local variables
    {
     if (this._bytes_in == null) {
      xml = xml + '<jns1:bytes_in xsi:nil=\'true\'/>';
     } else {
      xml = xml + '<jns1:bytes_in>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._bytes_in);
      xml = xml + '</jns1:bytes_in>';
     }
    }
    // block for local variables
    {
     if (this._bytes_out == null) {
      xml = xml + '<jns1:bytes_out xsi:nil=\'true\'/>';
     } else {
      xml = xml + '<jns1:bytes_out>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._bytes_out);
      xml = xml + '</jns1:bytes_out>';
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginEntity.prototype.serialize = datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginEntity_serialize;

function datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginEntity_deserialize (cxfjsutils, element) {
    var newobject = new datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginEntity();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing login');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'login')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setLogin(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing zone_start_date');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setZone_start_date(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing zone_stop_date');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setZone_stop_date(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing code_value');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'code_value')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setCode_value(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing bytes_in');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setBytes_in(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing bytes_out');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setBytes_out(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://datumnode.com/start/start_ip/radius}Get_Access_SysdateEntity
//
function datumnode_com_start_start_ip_radius_Get_Access_SysdateEntity () {
    this.typeMarker = 'datumnode_com_start_start_ip_radius_Get_Access_SysdateEntity';
    this._status = null;
    this._zone_date = null;
    this._sys_date = null;
    this._nas_ip = null;
    this._nas_name = null;
    this._nas_zone = null;
    this._login = null;
    this._mac_addr = null;
    this._nas_port_id = null;
    this._tfp_code = null;
    this._tfp_name = null;
    this._err_code = null;
    this._err_string = null;
}

//
// accessor is datumnode_com_start_start_ip_radius_Get_Access_SysdateEntity.prototype.getStatus
// element get for status
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for status
// setter function is is datumnode_com_start_start_ip_radius_Get_Access_SysdateEntity.prototype.setStatus
//
function datumnode_com_start_start_ip_radius_Get_Access_SysdateEntity_getStatus() { return this._status;}

datumnode_com_start_start_ip_radius_Get_Access_SysdateEntity.prototype.getStatus = datumnode_com_start_start_ip_radius_Get_Access_SysdateEntity_getStatus;

function datumnode_com_start_start_ip_radius_Get_Access_SysdateEntity_setStatus(value) { this._status = value;}

datumnode_com_start_start_ip_radius_Get_Access_SysdateEntity.prototype.setStatus = datumnode_com_start_start_ip_radius_Get_Access_SysdateEntity_setStatus;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Access_SysdateEntity.prototype.getZone_date
// element get for zone_date
// - element type is {http://www.w3.org/2001/XMLSchema}dateTime
// - required element
// - nillable
//
// element set for zone_date
// setter function is is datumnode_com_start_start_ip_radius_Get_Access_SysdateEntity.prototype.setZone_date
//
function datumnode_com_start_start_ip_radius_Get_Access_SysdateEntity_getZone_date() { return this._zone_date;}

datumnode_com_start_start_ip_radius_Get_Access_SysdateEntity.prototype.getZone_date = datumnode_com_start_start_ip_radius_Get_Access_SysdateEntity_getZone_date;

function datumnode_com_start_start_ip_radius_Get_Access_SysdateEntity_setZone_date(value) { this._zone_date = value;}

datumnode_com_start_start_ip_radius_Get_Access_SysdateEntity.prototype.setZone_date = datumnode_com_start_start_ip_radius_Get_Access_SysdateEntity_setZone_date;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Access_SysdateEntity.prototype.getSys_date
// element get for sys_date
// - element type is {http://www.w3.org/2001/XMLSchema}dateTime
// - required element
// - nillable
//
// element set for sys_date
// setter function is is datumnode_com_start_start_ip_radius_Get_Access_SysdateEntity.prototype.setSys_date
//
function datumnode_com_start_start_ip_radius_Get_Access_SysdateEntity_getSys_date() { return this._sys_date;}

datumnode_com_start_start_ip_radius_Get_Access_SysdateEntity.prototype.getSys_date = datumnode_com_start_start_ip_radius_Get_Access_SysdateEntity_getSys_date;

function datumnode_com_start_start_ip_radius_Get_Access_SysdateEntity_setSys_date(value) { this._sys_date = value;}

datumnode_com_start_start_ip_radius_Get_Access_SysdateEntity.prototype.setSys_date = datumnode_com_start_start_ip_radius_Get_Access_SysdateEntity_setSys_date;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Access_SysdateEntity.prototype.getNas_ip
// element get for nas_ip
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for nas_ip
// setter function is is datumnode_com_start_start_ip_radius_Get_Access_SysdateEntity.prototype.setNas_ip
//
function datumnode_com_start_start_ip_radius_Get_Access_SysdateEntity_getNas_ip() { return this._nas_ip;}

datumnode_com_start_start_ip_radius_Get_Access_SysdateEntity.prototype.getNas_ip = datumnode_com_start_start_ip_radius_Get_Access_SysdateEntity_getNas_ip;

function datumnode_com_start_start_ip_radius_Get_Access_SysdateEntity_setNas_ip(value) { this._nas_ip = value;}

datumnode_com_start_start_ip_radius_Get_Access_SysdateEntity.prototype.setNas_ip = datumnode_com_start_start_ip_radius_Get_Access_SysdateEntity_setNas_ip;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Access_SysdateEntity.prototype.getNas_name
// element get for nas_name
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for nas_name
// setter function is is datumnode_com_start_start_ip_radius_Get_Access_SysdateEntity.prototype.setNas_name
//
function datumnode_com_start_start_ip_radius_Get_Access_SysdateEntity_getNas_name() { return this._nas_name;}

datumnode_com_start_start_ip_radius_Get_Access_SysdateEntity.prototype.getNas_name = datumnode_com_start_start_ip_radius_Get_Access_SysdateEntity_getNas_name;

function datumnode_com_start_start_ip_radius_Get_Access_SysdateEntity_setNas_name(value) { this._nas_name = value;}

datumnode_com_start_start_ip_radius_Get_Access_SysdateEntity.prototype.setNas_name = datumnode_com_start_start_ip_radius_Get_Access_SysdateEntity_setNas_name;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Access_SysdateEntity.prototype.getNas_zone
// element get for nas_zone
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for nas_zone
// setter function is is datumnode_com_start_start_ip_radius_Get_Access_SysdateEntity.prototype.setNas_zone
//
function datumnode_com_start_start_ip_radius_Get_Access_SysdateEntity_getNas_zone() { return this._nas_zone;}

datumnode_com_start_start_ip_radius_Get_Access_SysdateEntity.prototype.getNas_zone = datumnode_com_start_start_ip_radius_Get_Access_SysdateEntity_getNas_zone;

function datumnode_com_start_start_ip_radius_Get_Access_SysdateEntity_setNas_zone(value) { this._nas_zone = value;}

datumnode_com_start_start_ip_radius_Get_Access_SysdateEntity.prototype.setNas_zone = datumnode_com_start_start_ip_radius_Get_Access_SysdateEntity_setNas_zone;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Access_SysdateEntity.prototype.getLogin
// element get for login
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for login
// setter function is is datumnode_com_start_start_ip_radius_Get_Access_SysdateEntity.prototype.setLogin
//
function datumnode_com_start_start_ip_radius_Get_Access_SysdateEntity_getLogin() { return this._login;}

datumnode_com_start_start_ip_radius_Get_Access_SysdateEntity.prototype.getLogin = datumnode_com_start_start_ip_radius_Get_Access_SysdateEntity_getLogin;

function datumnode_com_start_start_ip_radius_Get_Access_SysdateEntity_setLogin(value) { this._login = value;}

datumnode_com_start_start_ip_radius_Get_Access_SysdateEntity.prototype.setLogin = datumnode_com_start_start_ip_radius_Get_Access_SysdateEntity_setLogin;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Access_SysdateEntity.prototype.getMac_addr
// element get for mac_addr
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for mac_addr
// setter function is is datumnode_com_start_start_ip_radius_Get_Access_SysdateEntity.prototype.setMac_addr
//
function datumnode_com_start_start_ip_radius_Get_Access_SysdateEntity_getMac_addr() { return this._mac_addr;}

datumnode_com_start_start_ip_radius_Get_Access_SysdateEntity.prototype.getMac_addr = datumnode_com_start_start_ip_radius_Get_Access_SysdateEntity_getMac_addr;

function datumnode_com_start_start_ip_radius_Get_Access_SysdateEntity_setMac_addr(value) { this._mac_addr = value;}

datumnode_com_start_start_ip_radius_Get_Access_SysdateEntity.prototype.setMac_addr = datumnode_com_start_start_ip_radius_Get_Access_SysdateEntity_setMac_addr;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Access_SysdateEntity.prototype.getNas_port_id
// element get for nas_port_id
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for nas_port_id
// setter function is is datumnode_com_start_start_ip_radius_Get_Access_SysdateEntity.prototype.setNas_port_id
//
function datumnode_com_start_start_ip_radius_Get_Access_SysdateEntity_getNas_port_id() { return this._nas_port_id;}

datumnode_com_start_start_ip_radius_Get_Access_SysdateEntity.prototype.getNas_port_id = datumnode_com_start_start_ip_radius_Get_Access_SysdateEntity_getNas_port_id;

function datumnode_com_start_start_ip_radius_Get_Access_SysdateEntity_setNas_port_id(value) { this._nas_port_id = value;}

datumnode_com_start_start_ip_radius_Get_Access_SysdateEntity.prototype.setNas_port_id = datumnode_com_start_start_ip_radius_Get_Access_SysdateEntity_setNas_port_id;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Access_SysdateEntity.prototype.getTfp_code
// element get for tfp_code
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for tfp_code
// setter function is is datumnode_com_start_start_ip_radius_Get_Access_SysdateEntity.prototype.setTfp_code
//
function datumnode_com_start_start_ip_radius_Get_Access_SysdateEntity_getTfp_code() { return this._tfp_code;}

datumnode_com_start_start_ip_radius_Get_Access_SysdateEntity.prototype.getTfp_code = datumnode_com_start_start_ip_radius_Get_Access_SysdateEntity_getTfp_code;

function datumnode_com_start_start_ip_radius_Get_Access_SysdateEntity_setTfp_code(value) { this._tfp_code = value;}

datumnode_com_start_start_ip_radius_Get_Access_SysdateEntity.prototype.setTfp_code = datumnode_com_start_start_ip_radius_Get_Access_SysdateEntity_setTfp_code;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Access_SysdateEntity.prototype.getTfp_name
// element get for tfp_name
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for tfp_name
// setter function is is datumnode_com_start_start_ip_radius_Get_Access_SysdateEntity.prototype.setTfp_name
//
function datumnode_com_start_start_ip_radius_Get_Access_SysdateEntity_getTfp_name() { return this._tfp_name;}

datumnode_com_start_start_ip_radius_Get_Access_SysdateEntity.prototype.getTfp_name = datumnode_com_start_start_ip_radius_Get_Access_SysdateEntity_getTfp_name;

function datumnode_com_start_start_ip_radius_Get_Access_SysdateEntity_setTfp_name(value) { this._tfp_name = value;}

datumnode_com_start_start_ip_radius_Get_Access_SysdateEntity.prototype.setTfp_name = datumnode_com_start_start_ip_radius_Get_Access_SysdateEntity_setTfp_name;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Access_SysdateEntity.prototype.getErr_code
// element get for err_code
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for err_code
// setter function is is datumnode_com_start_start_ip_radius_Get_Access_SysdateEntity.prototype.setErr_code
//
function datumnode_com_start_start_ip_radius_Get_Access_SysdateEntity_getErr_code() { return this._err_code;}

datumnode_com_start_start_ip_radius_Get_Access_SysdateEntity.prototype.getErr_code = datumnode_com_start_start_ip_radius_Get_Access_SysdateEntity_getErr_code;

function datumnode_com_start_start_ip_radius_Get_Access_SysdateEntity_setErr_code(value) { this._err_code = value;}

datumnode_com_start_start_ip_radius_Get_Access_SysdateEntity.prototype.setErr_code = datumnode_com_start_start_ip_radius_Get_Access_SysdateEntity_setErr_code;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Access_SysdateEntity.prototype.getErr_string
// element get for err_string
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for err_string
// setter function is is datumnode_com_start_start_ip_radius_Get_Access_SysdateEntity.prototype.setErr_string
//
function datumnode_com_start_start_ip_radius_Get_Access_SysdateEntity_getErr_string() { return this._err_string;}

datumnode_com_start_start_ip_radius_Get_Access_SysdateEntity.prototype.getErr_string = datumnode_com_start_start_ip_radius_Get_Access_SysdateEntity_getErr_string;

function datumnode_com_start_start_ip_radius_Get_Access_SysdateEntity_setErr_string(value) { this._err_string = value;}

datumnode_com_start_start_ip_radius_Get_Access_SysdateEntity.prototype.setErr_string = datumnode_com_start_start_ip_radius_Get_Access_SysdateEntity_setErr_string;
//
// Serialize {http://datumnode.com/start/start_ip/radius}Get_Access_SysdateEntity
//
function datumnode_com_start_start_ip_radius_Get_Access_SysdateEntity_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'DatumNode\' xmlns:jns1=\'http://datumnode.com/start/start_ip/radius\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._status != null) {
      xml = xml + '<jns1:status>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._status);
      xml = xml + '</jns1:status>';
     }
    }
    // block for local variables
    {
     if (this._zone_date == null) {
      xml = xml + '<jns1:zone_date xsi:nil=\'true\'/>';
     } else {
      xml = xml + '<jns1:zone_date>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._zone_date);
      xml = xml + '</jns1:zone_date>';
     }
    }
    // block for local variables
    {
     if (this._sys_date == null) {
      xml = xml + '<jns1:sys_date xsi:nil=\'true\'/>';
     } else {
      xml = xml + '<jns1:sys_date>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._sys_date);
      xml = xml + '</jns1:sys_date>';
     }
    }
    // block for local variables
    {
     if (this._nas_ip != null) {
      xml = xml + '<jns1:nas_ip>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._nas_ip);
      xml = xml + '</jns1:nas_ip>';
     }
    }
    // block for local variables
    {
     if (this._nas_name != null) {
      xml = xml + '<jns1:nas_name>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._nas_name);
      xml = xml + '</jns1:nas_name>';
     }
    }
    // block for local variables
    {
     if (this._nas_zone != null) {
      xml = xml + '<jns1:nas_zone>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._nas_zone);
      xml = xml + '</jns1:nas_zone>';
     }
    }
    // block for local variables
    {
     if (this._login != null) {
      xml = xml + '<jns1:login>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._login);
      xml = xml + '</jns1:login>';
     }
    }
    // block for local variables
    {
     if (this._mac_addr != null) {
      xml = xml + '<jns1:mac_addr>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._mac_addr);
      xml = xml + '</jns1:mac_addr>';
     }
    }
    // block for local variables
    {
     if (this._nas_port_id != null) {
      xml = xml + '<jns1:nas_port_id>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._nas_port_id);
      xml = xml + '</jns1:nas_port_id>';
     }
    }
    // block for local variables
    {
     if (this._tfp_code != null) {
      xml = xml + '<jns1:tfp_code>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._tfp_code);
      xml = xml + '</jns1:tfp_code>';
     }
    }
    // block for local variables
    {
     if (this._tfp_name != null) {
      xml = xml + '<jns1:tfp_name>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._tfp_name);
      xml = xml + '</jns1:tfp_name>';
     }
    }
    // block for local variables
    {
     if (this._err_code != null) {
      xml = xml + '<jns1:err_code>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._err_code);
      xml = xml + '</jns1:err_code>';
     }
    }
    // block for local variables
    {
     if (this._err_string != null) {
      xml = xml + '<jns1:err_string>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._err_string);
      xml = xml + '</jns1:err_string>';
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

datumnode_com_start_start_ip_radius_Get_Access_SysdateEntity.prototype.serialize = datumnode_com_start_start_ip_radius_Get_Access_SysdateEntity_serialize;

function datumnode_com_start_start_ip_radius_Get_Access_SysdateEntity_deserialize (cxfjsutils, element) {
    var newobject = new datumnode_com_start_start_ip_radius_Get_Access_SysdateEntity();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing status');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'status')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setStatus(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing zone_date');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setZone_date(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing sys_date');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setSys_date(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing nas_ip');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'nas_ip')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setNas_ip(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing nas_name');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'nas_name')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setNas_name(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing nas_zone');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'nas_zone')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setNas_zone(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing login');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'login')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setLogin(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing mac_addr');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'mac_addr')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setMac_addr(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing nas_port_id');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'nas_port_id')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setNas_port_id(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing tfp_code');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'tfp_code')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setTfp_code(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing tfp_name');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'tfp_name')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setTfp_name(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing err_code');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'err_code')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setErr_code(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing err_string');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'err_string')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setErr_string(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://datumnode.com/start/start_ip/radius}Stop_Radius_SessionOutputParameters
//
function datumnode_com_start_start_ip_radius_Stop_Radius_SessionOutputParameters () {
    this.typeMarker = 'datumnode_com_start_start_ip_radius_Stop_Radius_SessionOutputParameters';
}

//
// Serialize {http://datumnode.com/start/start_ip/radius}Stop_Radius_SessionOutputParameters
//
function datumnode_com_start_start_ip_radius_Stop_Radius_SessionOutputParameters_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'DatumNode\' xmlns:jns1=\'http://datumnode.com/start/start_ip/radius\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

datumnode_com_start_start_ip_radius_Stop_Radius_SessionOutputParameters.prototype.serialize = datumnode_com_start_start_ip_radius_Stop_Radius_SessionOutputParameters_serialize;

function datumnode_com_start_start_ip_radius_Stop_Radius_SessionOutputParameters_deserialize (cxfjsutils, element) {
    var newobject = new datumnode_com_start_start_ip_radius_Stop_Radius_SessionOutputParameters();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    return newobject;
}

//
// Constructor for XML Schema item {http://datumnode.com/start/start_ip/radius}Change_PasswordResult
//
function datumnode_com_start_start_ip_radius_Change_PasswordResult () {
    this.typeMarker = 'datumnode_com_start_start_ip_radius_Change_PasswordResult';
    this._Result = null;
    this._Parameters = null;
}

//
// accessor is datumnode_com_start_start_ip_radius_Change_PasswordResult.prototype.getResult
// element get for Result
// - element type is {DatumNode}DbResult
// - optional element
//
// element set for Result
// setter function is is datumnode_com_start_start_ip_radius_Change_PasswordResult.prototype.setResult
//
function datumnode_com_start_start_ip_radius_Change_PasswordResult_getResult() { return this._Result;}

datumnode_com_start_start_ip_radius_Change_PasswordResult.prototype.getResult = datumnode_com_start_start_ip_radius_Change_PasswordResult_getResult;

function datumnode_com_start_start_ip_radius_Change_PasswordResult_setResult(value) { this._Result = value;}

datumnode_com_start_start_ip_radius_Change_PasswordResult.prototype.setResult = datumnode_com_start_start_ip_radius_Change_PasswordResult_setResult;
//
// accessor is datumnode_com_start_start_ip_radius_Change_PasswordResult.prototype.getParameters
// element get for Parameters
// - element type is {http://datumnode.com/start/start_ip/radius}Change_PasswordOutputParameters
// - optional element
//
// element set for Parameters
// setter function is is datumnode_com_start_start_ip_radius_Change_PasswordResult.prototype.setParameters
//
function datumnode_com_start_start_ip_radius_Change_PasswordResult_getParameters() { return this._Parameters;}

datumnode_com_start_start_ip_radius_Change_PasswordResult.prototype.getParameters = datumnode_com_start_start_ip_radius_Change_PasswordResult_getParameters;

function datumnode_com_start_start_ip_radius_Change_PasswordResult_setParameters(value) { this._Parameters = value;}

datumnode_com_start_start_ip_radius_Change_PasswordResult.prototype.setParameters = datumnode_com_start_start_ip_radius_Change_PasswordResult_setParameters;
//
// Serialize {http://datumnode.com/start/start_ip/radius}Change_PasswordResult
//
function datumnode_com_start_start_ip_radius_Change_PasswordResult_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'DatumNode\' xmlns:jns1=\'http://datumnode.com/start/start_ip/radius\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._Result != null) {
      xml = xml + this._Result.serialize(cxfjsutils, 'jns0:Result', null);
     }
    }
    // block for local variables
    {
     if (this._Parameters != null) {
      xml = xml + this._Parameters.serialize(cxfjsutils, 'jns1:Parameters', null);
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

datumnode_com_start_start_ip_radius_Change_PasswordResult.prototype.serialize = datumnode_com_start_start_ip_radius_Change_PasswordResult_serialize;

function datumnode_com_start_start_ip_radius_Change_PasswordResult_deserialize (cxfjsutils, element) {
    var newobject = new datumnode_com_start_start_ip_radius_Change_PasswordResult();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Result');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'DatumNode', 'Result')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = DN_DbResult_deserialize(cxfjsutils, curElement);
     }
     newobject.setResult(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Parameters');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'Parameters')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = datumnode_com_start_start_ip_radius_Change_PasswordOutputParameters_deserialize(cxfjsutils, curElement);
     }
     newobject.setParameters(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://datumnode.com/start/start_ip/radius}Get_Sessions_by_Login_SysEntity
//
function datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity () {
    this.typeMarker = 'datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity';
    this._status = null;
    this._cid = null;
    this._cid_primary = null;
    this._ip = null;
    this._nas_ip = null;
    this._nas_name = null;
    this._nas_zone = null;
    this._login = null;
    this._mac_addr = null;
    this._nas_port_id = null;
    this._policy = null;
    this._zone_access_date = null;
    this._zone_start_date = null;
    this._zone_last_alive_date = null;
    this._zone_stop_date = null;
    this._sys_access_date = null;
    this._sys_start_date = null;
    this._sys_stop_date = null;
    this._stop_cause = null;
    this._bytes_in = null;
    this._bytes_out = null;
}

//
// accessor is datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity.prototype.getStatus
// element get for status
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for status
// setter function is is datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity.prototype.setStatus
//
function datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity_getStatus() { return this._status;}

datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity.prototype.getStatus = datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity_getStatus;

function datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity_setStatus(value) { this._status = value;}

datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity.prototype.setStatus = datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity_setStatus;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity.prototype.getCid
// element get for cid
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for cid
// setter function is is datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity.prototype.setCid
//
function datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity_getCid() { return this._cid;}

datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity.prototype.getCid = datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity_getCid;

function datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity_setCid(value) { this._cid = value;}

datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity.prototype.setCid = datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity_setCid;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity.prototype.getCid_primary
// element get for cid_primary
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for cid_primary
// setter function is is datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity.prototype.setCid_primary
//
function datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity_getCid_primary() { return this._cid_primary;}

datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity.prototype.getCid_primary = datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity_getCid_primary;

function datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity_setCid_primary(value) { this._cid_primary = value;}

datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity.prototype.setCid_primary = datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity_setCid_primary;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity.prototype.getIp
// element get for ip
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for ip
// setter function is is datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity.prototype.setIp
//
function datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity_getIp() { return this._ip;}

datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity.prototype.getIp = datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity_getIp;

function datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity_setIp(value) { this._ip = value;}

datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity.prototype.setIp = datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity_setIp;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity.prototype.getNas_ip
// element get for nas_ip
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for nas_ip
// setter function is is datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity.prototype.setNas_ip
//
function datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity_getNas_ip() { return this._nas_ip;}

datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity.prototype.getNas_ip = datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity_getNas_ip;

function datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity_setNas_ip(value) { this._nas_ip = value;}

datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity.prototype.setNas_ip = datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity_setNas_ip;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity.prototype.getNas_name
// element get for nas_name
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for nas_name
// setter function is is datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity.prototype.setNas_name
//
function datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity_getNas_name() { return this._nas_name;}

datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity.prototype.getNas_name = datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity_getNas_name;

function datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity_setNas_name(value) { this._nas_name = value;}

datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity.prototype.setNas_name = datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity_setNas_name;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity.prototype.getNas_zone
// element get for nas_zone
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for nas_zone
// setter function is is datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity.prototype.setNas_zone
//
function datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity_getNas_zone() { return this._nas_zone;}

datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity.prototype.getNas_zone = datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity_getNas_zone;

function datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity_setNas_zone(value) { this._nas_zone = value;}

datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity.prototype.setNas_zone = datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity_setNas_zone;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity.prototype.getLogin
// element get for login
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for login
// setter function is is datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity.prototype.setLogin
//
function datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity_getLogin() { return this._login;}

datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity.prototype.getLogin = datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity_getLogin;

function datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity_setLogin(value) { this._login = value;}

datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity.prototype.setLogin = datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity_setLogin;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity.prototype.getMac_addr
// element get for mac_addr
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for mac_addr
// setter function is is datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity.prototype.setMac_addr
//
function datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity_getMac_addr() { return this._mac_addr;}

datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity.prototype.getMac_addr = datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity_getMac_addr;

function datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity_setMac_addr(value) { this._mac_addr = value;}

datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity.prototype.setMac_addr = datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity_setMac_addr;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity.prototype.getNas_port_id
// element get for nas_port_id
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for nas_port_id
// setter function is is datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity.prototype.setNas_port_id
//
function datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity_getNas_port_id() { return this._nas_port_id;}

datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity.prototype.getNas_port_id = datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity_getNas_port_id;

function datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity_setNas_port_id(value) { this._nas_port_id = value;}

datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity.prototype.setNas_port_id = datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity_setNas_port_id;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity.prototype.getPolicy
// element get for policy
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for policy
// setter function is is datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity.prototype.setPolicy
//
function datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity_getPolicy() { return this._policy;}

datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity.prototype.getPolicy = datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity_getPolicy;

function datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity_setPolicy(value) { this._policy = value;}

datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity.prototype.setPolicy = datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity_setPolicy;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity.prototype.getZone_access_date
// element get for zone_access_date
// - element type is {http://www.w3.org/2001/XMLSchema}dateTime
// - required element
// - nillable
//
// element set for zone_access_date
// setter function is is datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity.prototype.setZone_access_date
//
function datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity_getZone_access_date() { return this._zone_access_date;}

datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity.prototype.getZone_access_date = datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity_getZone_access_date;

function datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity_setZone_access_date(value) { this._zone_access_date = value;}

datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity.prototype.setZone_access_date = datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity_setZone_access_date;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity.prototype.getZone_start_date
// element get for zone_start_date
// - element type is {http://www.w3.org/2001/XMLSchema}dateTime
// - required element
// - nillable
//
// element set for zone_start_date
// setter function is is datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity.prototype.setZone_start_date
//
function datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity_getZone_start_date() { return this._zone_start_date;}

datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity.prototype.getZone_start_date = datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity_getZone_start_date;

function datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity_setZone_start_date(value) { this._zone_start_date = value;}

datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity.prototype.setZone_start_date = datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity_setZone_start_date;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity.prototype.getZone_last_alive_date
// element get for zone_last_alive_date
// - element type is {http://www.w3.org/2001/XMLSchema}dateTime
// - required element
// - nillable
//
// element set for zone_last_alive_date
// setter function is is datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity.prototype.setZone_last_alive_date
//
function datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity_getZone_last_alive_date() { return this._zone_last_alive_date;}

datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity.prototype.getZone_last_alive_date = datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity_getZone_last_alive_date;

function datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity_setZone_last_alive_date(value) { this._zone_last_alive_date = value;}

datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity.prototype.setZone_last_alive_date = datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity_setZone_last_alive_date;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity.prototype.getZone_stop_date
// element get for zone_stop_date
// - element type is {http://www.w3.org/2001/XMLSchema}dateTime
// - required element
// - nillable
//
// element set for zone_stop_date
// setter function is is datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity.prototype.setZone_stop_date
//
function datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity_getZone_stop_date() { return this._zone_stop_date;}

datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity.prototype.getZone_stop_date = datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity_getZone_stop_date;

function datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity_setZone_stop_date(value) { this._zone_stop_date = value;}

datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity.prototype.setZone_stop_date = datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity_setZone_stop_date;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity.prototype.getSys_access_date
// element get for sys_access_date
// - element type is {http://www.w3.org/2001/XMLSchema}dateTime
// - required element
// - nillable
//
// element set for sys_access_date
// setter function is is datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity.prototype.setSys_access_date
//
function datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity_getSys_access_date() { return this._sys_access_date;}

datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity.prototype.getSys_access_date = datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity_getSys_access_date;

function datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity_setSys_access_date(value) { this._sys_access_date = value;}

datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity.prototype.setSys_access_date = datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity_setSys_access_date;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity.prototype.getSys_start_date
// element get for sys_start_date
// - element type is {http://www.w3.org/2001/XMLSchema}dateTime
// - required element
// - nillable
//
// element set for sys_start_date
// setter function is is datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity.prototype.setSys_start_date
//
function datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity_getSys_start_date() { return this._sys_start_date;}

datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity.prototype.getSys_start_date = datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity_getSys_start_date;

function datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity_setSys_start_date(value) { this._sys_start_date = value;}

datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity.prototype.setSys_start_date = datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity_setSys_start_date;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity.prototype.getSys_stop_date
// element get for sys_stop_date
// - element type is {http://www.w3.org/2001/XMLSchema}dateTime
// - required element
// - nillable
//
// element set for sys_stop_date
// setter function is is datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity.prototype.setSys_stop_date
//
function datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity_getSys_stop_date() { return this._sys_stop_date;}

datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity.prototype.getSys_stop_date = datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity_getSys_stop_date;

function datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity_setSys_stop_date(value) { this._sys_stop_date = value;}

datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity.prototype.setSys_stop_date = datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity_setSys_stop_date;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity.prototype.getStop_cause
// element get for stop_cause
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for stop_cause
// setter function is is datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity.prototype.setStop_cause
//
function datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity_getStop_cause() { return this._stop_cause;}

datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity.prototype.getStop_cause = datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity_getStop_cause;

function datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity_setStop_cause(value) { this._stop_cause = value;}

datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity.prototype.setStop_cause = datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity_setStop_cause;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity.prototype.getBytes_in
// element get for bytes_in
// - element type is {http://www.w3.org/2001/XMLSchema}decimal
// - required element
// - nillable
//
// element set for bytes_in
// setter function is is datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity.prototype.setBytes_in
//
function datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity_getBytes_in() { return this._bytes_in;}

datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity.prototype.getBytes_in = datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity_getBytes_in;

function datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity_setBytes_in(value) { this._bytes_in = value;}

datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity.prototype.setBytes_in = datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity_setBytes_in;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity.prototype.getBytes_out
// element get for bytes_out
// - element type is {http://www.w3.org/2001/XMLSchema}decimal
// - required element
// - nillable
//
// element set for bytes_out
// setter function is is datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity.prototype.setBytes_out
//
function datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity_getBytes_out() { return this._bytes_out;}

datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity.prototype.getBytes_out = datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity_getBytes_out;

function datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity_setBytes_out(value) { this._bytes_out = value;}

datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity.prototype.setBytes_out = datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity_setBytes_out;
//
// Serialize {http://datumnode.com/start/start_ip/radius}Get_Sessions_by_Login_SysEntity
//
function datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'DatumNode\' xmlns:jns1=\'http://datumnode.com/start/start_ip/radius\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._status != null) {
      xml = xml + '<jns1:status>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._status);
      xml = xml + '</jns1:status>';
     }
    }
    // block for local variables
    {
     if (this._cid != null) {
      xml = xml + '<jns1:cid>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._cid);
      xml = xml + '</jns1:cid>';
     }
    }
    // block for local variables
    {
     if (this._cid_primary != null) {
      xml = xml + '<jns1:cid_primary>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._cid_primary);
      xml = xml + '</jns1:cid_primary>';
     }
    }
    // block for local variables
    {
     if (this._ip != null) {
      xml = xml + '<jns1:ip>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._ip);
      xml = xml + '</jns1:ip>';
     }
    }
    // block for local variables
    {
     if (this._nas_ip != null) {
      xml = xml + '<jns1:nas_ip>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._nas_ip);
      xml = xml + '</jns1:nas_ip>';
     }
    }
    // block for local variables
    {
     if (this._nas_name != null) {
      xml = xml + '<jns1:nas_name>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._nas_name);
      xml = xml + '</jns1:nas_name>';
     }
    }
    // block for local variables
    {
     if (this._nas_zone != null) {
      xml = xml + '<jns1:nas_zone>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._nas_zone);
      xml = xml + '</jns1:nas_zone>';
     }
    }
    // block for local variables
    {
     if (this._login != null) {
      xml = xml + '<jns1:login>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._login);
      xml = xml + '</jns1:login>';
     }
    }
    // block for local variables
    {
     if (this._mac_addr != null) {
      xml = xml + '<jns1:mac_addr>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._mac_addr);
      xml = xml + '</jns1:mac_addr>';
     }
    }
    // block for local variables
    {
     if (this._nas_port_id != null) {
      xml = xml + '<jns1:nas_port_id>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._nas_port_id);
      xml = xml + '</jns1:nas_port_id>';
     }
    }
    // block for local variables
    {
     if (this._policy != null) {
      xml = xml + '<jns1:policy>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._policy);
      xml = xml + '</jns1:policy>';
     }
    }
    // block for local variables
    {
     if (this._zone_access_date == null) {
      xml = xml + '<jns1:zone_access_date xsi:nil=\'true\'/>';
     } else {
      xml = xml + '<jns1:zone_access_date>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._zone_access_date);
      xml = xml + '</jns1:zone_access_date>';
     }
    }
    // block for local variables
    {
     if (this._zone_start_date == null) {
      xml = xml + '<jns1:zone_start_date xsi:nil=\'true\'/>';
     } else {
      xml = xml + '<jns1:zone_start_date>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._zone_start_date);
      xml = xml + '</jns1:zone_start_date>';
     }
    }
    // block for local variables
    {
     if (this._zone_last_alive_date == null) {
      xml = xml + '<jns1:zone_last_alive_date xsi:nil=\'true\'/>';
     } else {
      xml = xml + '<jns1:zone_last_alive_date>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._zone_last_alive_date);
      xml = xml + '</jns1:zone_last_alive_date>';
     }
    }
    // block for local variables
    {
     if (this._zone_stop_date == null) {
      xml = xml + '<jns1:zone_stop_date xsi:nil=\'true\'/>';
     } else {
      xml = xml + '<jns1:zone_stop_date>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._zone_stop_date);
      xml = xml + '</jns1:zone_stop_date>';
     }
    }
    // block for local variables
    {
     if (this._sys_access_date == null) {
      xml = xml + '<jns1:sys_access_date xsi:nil=\'true\'/>';
     } else {
      xml = xml + '<jns1:sys_access_date>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._sys_access_date);
      xml = xml + '</jns1:sys_access_date>';
     }
    }
    // block for local variables
    {
     if (this._sys_start_date == null) {
      xml = xml + '<jns1:sys_start_date xsi:nil=\'true\'/>';
     } else {
      xml = xml + '<jns1:sys_start_date>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._sys_start_date);
      xml = xml + '</jns1:sys_start_date>';
     }
    }
    // block for local variables
    {
     if (this._sys_stop_date == null) {
      xml = xml + '<jns1:sys_stop_date xsi:nil=\'true\'/>';
     } else {
      xml = xml + '<jns1:sys_stop_date>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._sys_stop_date);
      xml = xml + '</jns1:sys_stop_date>';
     }
    }
    // block for local variables
    {
     if (this._stop_cause != null) {
      xml = xml + '<jns1:stop_cause>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._stop_cause);
      xml = xml + '</jns1:stop_cause>';
     }
    }
    // block for local variables
    {
     if (this._bytes_in == null) {
      xml = xml + '<jns1:bytes_in xsi:nil=\'true\'/>';
     } else {
      xml = xml + '<jns1:bytes_in>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._bytes_in);
      xml = xml + '</jns1:bytes_in>';
     }
    }
    // block for local variables
    {
     if (this._bytes_out == null) {
      xml = xml + '<jns1:bytes_out xsi:nil=\'true\'/>';
     } else {
      xml = xml + '<jns1:bytes_out>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._bytes_out);
      xml = xml + '</jns1:bytes_out>';
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity.prototype.serialize = datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity_serialize;

function datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity_deserialize (cxfjsutils, element) {
    var newobject = new datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing status');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'status')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setStatus(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing cid');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'cid')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setCid(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing cid_primary');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'cid_primary')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setCid_primary(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing ip');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'ip')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setIp(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing nas_ip');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'nas_ip')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setNas_ip(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing nas_name');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'nas_name')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setNas_name(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing nas_zone');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'nas_zone')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setNas_zone(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing login');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'login')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setLogin(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing mac_addr');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'mac_addr')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setMac_addr(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing nas_port_id');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'nas_port_id')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setNas_port_id(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing policy');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'policy')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setPolicy(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing zone_access_date');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setZone_access_date(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing zone_start_date');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setZone_start_date(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing zone_last_alive_date');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setZone_last_alive_date(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing zone_stop_date');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setZone_stop_date(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing sys_access_date');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setSys_access_date(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing sys_start_date');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setSys_start_date(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing sys_stop_date');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setSys_stop_date(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing stop_cause');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'stop_cause')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setStop_cause(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing bytes_in');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setBytes_in(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing bytes_out');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setBytes_out(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://datumnode.com/start/start_ip/radius}Get_Access_SysdateInputParameters
//
function datumnode_com_start_start_ip_radius_Get_Access_SysdateInputParameters () {
    this.typeMarker = 'datumnode_com_start_start_ip_radius_Get_Access_SysdateInputParameters';
    this._p_Interval = null;
    this._p_Login = null;
    this._p_MAC = null;
    this._p_NAS_port_ID = null;
}

//
// accessor is datumnode_com_start_start_ip_radius_Get_Access_SysdateInputParameters.prototype.getP_Interval
// element get for p_Interval
// - element type is {http://www.w3.org/2001/XMLSchema}decimal
// - required element
// - nillable
//
// element set for p_Interval
// setter function is is datumnode_com_start_start_ip_radius_Get_Access_SysdateInputParameters.prototype.setP_Interval
//
function datumnode_com_start_start_ip_radius_Get_Access_SysdateInputParameters_getP_Interval() { return this._p_Interval;}

datumnode_com_start_start_ip_radius_Get_Access_SysdateInputParameters.prototype.getP_Interval = datumnode_com_start_start_ip_radius_Get_Access_SysdateInputParameters_getP_Interval;

function datumnode_com_start_start_ip_radius_Get_Access_SysdateInputParameters_setP_Interval(value) { this._p_Interval = value;}

datumnode_com_start_start_ip_radius_Get_Access_SysdateInputParameters.prototype.setP_Interval = datumnode_com_start_start_ip_radius_Get_Access_SysdateInputParameters_setP_Interval;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Access_SysdateInputParameters.prototype.getP_Login
// element get for p_Login
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for p_Login
// setter function is is datumnode_com_start_start_ip_radius_Get_Access_SysdateInputParameters.prototype.setP_Login
//
function datumnode_com_start_start_ip_radius_Get_Access_SysdateInputParameters_getP_Login() { return this._p_Login;}

datumnode_com_start_start_ip_radius_Get_Access_SysdateInputParameters.prototype.getP_Login = datumnode_com_start_start_ip_radius_Get_Access_SysdateInputParameters_getP_Login;

function datumnode_com_start_start_ip_radius_Get_Access_SysdateInputParameters_setP_Login(value) { this._p_Login = value;}

datumnode_com_start_start_ip_radius_Get_Access_SysdateInputParameters.prototype.setP_Login = datumnode_com_start_start_ip_radius_Get_Access_SysdateInputParameters_setP_Login;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Access_SysdateInputParameters.prototype.getP_MAC
// element get for p_MAC
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for p_MAC
// setter function is is datumnode_com_start_start_ip_radius_Get_Access_SysdateInputParameters.prototype.setP_MAC
//
function datumnode_com_start_start_ip_radius_Get_Access_SysdateInputParameters_getP_MAC() { return this._p_MAC;}

datumnode_com_start_start_ip_radius_Get_Access_SysdateInputParameters.prototype.getP_MAC = datumnode_com_start_start_ip_radius_Get_Access_SysdateInputParameters_getP_MAC;

function datumnode_com_start_start_ip_radius_Get_Access_SysdateInputParameters_setP_MAC(value) { this._p_MAC = value;}

datumnode_com_start_start_ip_radius_Get_Access_SysdateInputParameters.prototype.setP_MAC = datumnode_com_start_start_ip_radius_Get_Access_SysdateInputParameters_setP_MAC;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Access_SysdateInputParameters.prototype.getP_NAS_port_ID
// element get for p_NAS_port_ID
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for p_NAS_port_ID
// setter function is is datumnode_com_start_start_ip_radius_Get_Access_SysdateInputParameters.prototype.setP_NAS_port_ID
//
function datumnode_com_start_start_ip_radius_Get_Access_SysdateInputParameters_getP_NAS_port_ID() { return this._p_NAS_port_ID;}

datumnode_com_start_start_ip_radius_Get_Access_SysdateInputParameters.prototype.getP_NAS_port_ID = datumnode_com_start_start_ip_radius_Get_Access_SysdateInputParameters_getP_NAS_port_ID;

function datumnode_com_start_start_ip_radius_Get_Access_SysdateInputParameters_setP_NAS_port_ID(value) { this._p_NAS_port_ID = value;}

datumnode_com_start_start_ip_radius_Get_Access_SysdateInputParameters.prototype.setP_NAS_port_ID = datumnode_com_start_start_ip_radius_Get_Access_SysdateInputParameters_setP_NAS_port_ID;
//
// Serialize {http://datumnode.com/start/start_ip/radius}Get_Access_SysdateInputParameters
//
function datumnode_com_start_start_ip_radius_Get_Access_SysdateInputParameters_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'DatumNode\' xmlns:jns1=\'http://datumnode.com/start/start_ip/radius\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._p_Interval == null) {
      xml = xml + '<jns1:p_Interval xsi:nil=\'true\'/>';
     } else {
      xml = xml + '<jns1:p_Interval>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._p_Interval);
      xml = xml + '</jns1:p_Interval>';
     }
    }
    // block for local variables
    {
     if (this._p_Login != null) {
      xml = xml + '<jns1:p_Login>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._p_Login);
      xml = xml + '</jns1:p_Login>';
     }
    }
    // block for local variables
    {
     if (this._p_MAC != null) {
      xml = xml + '<jns1:p_MAC>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._p_MAC);
      xml = xml + '</jns1:p_MAC>';
     }
    }
    // block for local variables
    {
     if (this._p_NAS_port_ID != null) {
      xml = xml + '<jns1:p_NAS_port_ID>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._p_NAS_port_ID);
      xml = xml + '</jns1:p_NAS_port_ID>';
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

datumnode_com_start_start_ip_radius_Get_Access_SysdateInputParameters.prototype.serialize = datumnode_com_start_start_ip_radius_Get_Access_SysdateInputParameters_serialize;

function datumnode_com_start_start_ip_radius_Get_Access_SysdateInputParameters_deserialize (cxfjsutils, element) {
    var newobject = new datumnode_com_start_start_ip_radius_Get_Access_SysdateInputParameters();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing p_Interval');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setP_Interval(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing p_Login');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'p_Login')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setP_Login(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing p_MAC');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'p_MAC')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setP_MAC(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing p_NAS_port_ID');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'p_NAS_port_ID')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setP_NAS_port_ID(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://datumnode.com/start/start_ip/radius}Get_Sessions_by_Login_SysInputParameters
//
function datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysInputParameters () {
    this.typeMarker = 'datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysInputParameters';
    this._p_Filial = null;
    this._p_Interval = null;
    this._p_Login = null;
}

//
// accessor is datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysInputParameters.prototype.getP_Filial
// element get for p_Filial
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for p_Filial
// setter function is is datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysInputParameters.prototype.setP_Filial
//
function datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysInputParameters_getP_Filial() { return this._p_Filial;}

datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysInputParameters.prototype.getP_Filial = datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysInputParameters_getP_Filial;

function datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysInputParameters_setP_Filial(value) { this._p_Filial = value;}

datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysInputParameters.prototype.setP_Filial = datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysInputParameters_setP_Filial;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysInputParameters.prototype.getP_Interval
// element get for p_Interval
// - element type is {http://www.w3.org/2001/XMLSchema}decimal
// - required element
// - nillable
//
// element set for p_Interval
// setter function is is datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysInputParameters.prototype.setP_Interval
//
function datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysInputParameters_getP_Interval() { return this._p_Interval;}

datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysInputParameters.prototype.getP_Interval = datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysInputParameters_getP_Interval;

function datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysInputParameters_setP_Interval(value) { this._p_Interval = value;}

datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysInputParameters.prototype.setP_Interval = datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysInputParameters_setP_Interval;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysInputParameters.prototype.getP_Login
// element get for p_Login
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for p_Login
// setter function is is datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysInputParameters.prototype.setP_Login
//
function datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysInputParameters_getP_Login() { return this._p_Login;}

datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysInputParameters.prototype.getP_Login = datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysInputParameters_getP_Login;

function datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysInputParameters_setP_Login(value) { this._p_Login = value;}

datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysInputParameters.prototype.setP_Login = datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysInputParameters_setP_Login;
//
// Serialize {http://datumnode.com/start/start_ip/radius}Get_Sessions_by_Login_SysInputParameters
//
function datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysInputParameters_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'DatumNode\' xmlns:jns1=\'http://datumnode.com/start/start_ip/radius\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._p_Filial != null) {
      xml = xml + '<jns1:p_Filial>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._p_Filial);
      xml = xml + '</jns1:p_Filial>';
     }
    }
    // block for local variables
    {
     if (this._p_Interval == null) {
      xml = xml + '<jns1:p_Interval xsi:nil=\'true\'/>';
     } else {
      xml = xml + '<jns1:p_Interval>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._p_Interval);
      xml = xml + '</jns1:p_Interval>';
     }
    }
    // block for local variables
    {
     if (this._p_Login != null) {
      xml = xml + '<jns1:p_Login>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._p_Login);
      xml = xml + '</jns1:p_Login>';
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysInputParameters.prototype.serialize = datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysInputParameters_serialize;

function datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysInputParameters_deserialize (cxfjsutils, element) {
    var newobject = new datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysInputParameters();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing p_Filial');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'p_Filial')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setP_Filial(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing p_Interval');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setP_Interval(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing p_Login');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'p_Login')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setP_Login(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://datumnode.com/start/start_ip/radius}ArrayOfGet_Sessions_by_Login_SysEntity
//
function datumnode_com_start_start_ip_radius_ArrayOfGet_Sessions_by_Login_SysEntity () {
    this.typeMarker = 'datumnode_com_start_start_ip_radius_ArrayOfGet_Sessions_by_Login_SysEntity';
    this._Get_Sessions_by_Login_SysEntity = [];
}

//
// accessor is datumnode_com_start_start_ip_radius_ArrayOfGet_Sessions_by_Login_SysEntity.prototype.getGet_Sessions_by_Login_SysEntity
// element get for Get_Sessions_by_Login_SysEntity
// - element type is {http://datumnode.com/start/start_ip/radius}Get_Sessions_by_Login_SysEntity
// - required element
// - array
// - nillable
//
// element set for Get_Sessions_by_Login_SysEntity
// setter function is is datumnode_com_start_start_ip_radius_ArrayOfGet_Sessions_by_Login_SysEntity.prototype.setGet_Sessions_by_Login_SysEntity
//
function datumnode_com_start_start_ip_radius_ArrayOfGet_Sessions_by_Login_SysEntity_getGet_Sessions_by_Login_SysEntity() { return this._Get_Sessions_by_Login_SysEntity;}

datumnode_com_start_start_ip_radius_ArrayOfGet_Sessions_by_Login_SysEntity.prototype.getGet_Sessions_by_Login_SysEntity = datumnode_com_start_start_ip_radius_ArrayOfGet_Sessions_by_Login_SysEntity_getGet_Sessions_by_Login_SysEntity;

function datumnode_com_start_start_ip_radius_ArrayOfGet_Sessions_by_Login_SysEntity_setGet_Sessions_by_Login_SysEntity(value) { this._Get_Sessions_by_Login_SysEntity = value;}

datumnode_com_start_start_ip_radius_ArrayOfGet_Sessions_by_Login_SysEntity.prototype.setGet_Sessions_by_Login_SysEntity = datumnode_com_start_start_ip_radius_ArrayOfGet_Sessions_by_Login_SysEntity_setGet_Sessions_by_Login_SysEntity;
//
// Serialize {http://datumnode.com/start/start_ip/radius}ArrayOfGet_Sessions_by_Login_SysEntity
//
function datumnode_com_start_start_ip_radius_ArrayOfGet_Sessions_by_Login_SysEntity_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'DatumNode\' xmlns:jns1=\'http://datumnode.com/start/start_ip/radius\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._Get_Sessions_by_Login_SysEntity != null) {
      for (var ax = 0;ax < this._Get_Sessions_by_Login_SysEntity.length;ax ++) {
       if (this._Get_Sessions_by_Login_SysEntity[ax] == null) {
        xml = xml + '<jns1:Get_Sessions_by_Login_SysEntity xsi:nil=\'true\'/>';
       } else {
        xml = xml + this._Get_Sessions_by_Login_SysEntity[ax].serialize(cxfjsutils, 'jns1:Get_Sessions_by_Login_SysEntity', null);
       }
      }
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

datumnode_com_start_start_ip_radius_ArrayOfGet_Sessions_by_Login_SysEntity.prototype.serialize = datumnode_com_start_start_ip_radius_ArrayOfGet_Sessions_by_Login_SysEntity_serialize;

function datumnode_com_start_start_ip_radius_ArrayOfGet_Sessions_by_Login_SysEntity_deserialize (cxfjsutils, element) {
    var newobject = new datumnode_com_start_start_ip_radius_ArrayOfGet_Sessions_by_Login_SysEntity();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Get_Sessions_by_Login_SysEntity');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'Get_Sessions_by_Login_SysEntity')) {
     item = [];
     do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       arrayItem = datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity_deserialize(cxfjsutils, curElement);
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'Get_Sessions_by_Login_SysEntity'));
     newobject.setGet_Sessions_by_Login_SysEntity(item);
     var item = null;
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://datumnode.com/start/start_ip/radius}Get_Access_by_Login_SysEntity
//
function datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysEntity () {
    this.typeMarker = 'datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysEntity';
    this._status = null;
    this._zone_date = null;
    this._sys_date = null;
    this._nas_ip = null;
    this._nas_name = null;
    this._nas_zone = null;
    this._login = null;
    this._mac_addr = null;
    this._nas_port_id = null;
    this._tfp_code = null;
    this._tfp_name = null;
    this._err_code = null;
    this._err_string = null;
}

//
// accessor is datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysEntity.prototype.getStatus
// element get for status
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for status
// setter function is is datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysEntity.prototype.setStatus
//
function datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysEntity_getStatus() { return this._status;}

datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysEntity.prototype.getStatus = datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysEntity_getStatus;

function datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysEntity_setStatus(value) { this._status = value;}

datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysEntity.prototype.setStatus = datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysEntity_setStatus;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysEntity.prototype.getZone_date
// element get for zone_date
// - element type is {http://www.w3.org/2001/XMLSchema}dateTime
// - required element
// - nillable
//
// element set for zone_date
// setter function is is datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysEntity.prototype.setZone_date
//
function datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysEntity_getZone_date() { return this._zone_date;}

datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysEntity.prototype.getZone_date = datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysEntity_getZone_date;

function datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysEntity_setZone_date(value) { this._zone_date = value;}

datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysEntity.prototype.setZone_date = datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysEntity_setZone_date;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysEntity.prototype.getSys_date
// element get for sys_date
// - element type is {http://www.w3.org/2001/XMLSchema}dateTime
// - required element
// - nillable
//
// element set for sys_date
// setter function is is datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysEntity.prototype.setSys_date
//
function datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysEntity_getSys_date() { return this._sys_date;}

datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysEntity.prototype.getSys_date = datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysEntity_getSys_date;

function datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysEntity_setSys_date(value) { this._sys_date = value;}

datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysEntity.prototype.setSys_date = datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysEntity_setSys_date;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysEntity.prototype.getNas_ip
// element get for nas_ip
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for nas_ip
// setter function is is datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysEntity.prototype.setNas_ip
//
function datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysEntity_getNas_ip() { return this._nas_ip;}

datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysEntity.prototype.getNas_ip = datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysEntity_getNas_ip;

function datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysEntity_setNas_ip(value) { this._nas_ip = value;}

datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysEntity.prototype.setNas_ip = datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysEntity_setNas_ip;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysEntity.prototype.getNas_name
// element get for nas_name
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for nas_name
// setter function is is datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysEntity.prototype.setNas_name
//
function datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysEntity_getNas_name() { return this._nas_name;}

datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysEntity.prototype.getNas_name = datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysEntity_getNas_name;

function datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysEntity_setNas_name(value) { this._nas_name = value;}

datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysEntity.prototype.setNas_name = datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysEntity_setNas_name;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysEntity.prototype.getNas_zone
// element get for nas_zone
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for nas_zone
// setter function is is datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysEntity.prototype.setNas_zone
//
function datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysEntity_getNas_zone() { return this._nas_zone;}

datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysEntity.prototype.getNas_zone = datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysEntity_getNas_zone;

function datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysEntity_setNas_zone(value) { this._nas_zone = value;}

datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysEntity.prototype.setNas_zone = datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysEntity_setNas_zone;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysEntity.prototype.getLogin
// element get for login
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for login
// setter function is is datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysEntity.prototype.setLogin
//
function datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysEntity_getLogin() { return this._login;}

datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysEntity.prototype.getLogin = datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysEntity_getLogin;

function datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysEntity_setLogin(value) { this._login = value;}

datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysEntity.prototype.setLogin = datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysEntity_setLogin;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysEntity.prototype.getMac_addr
// element get for mac_addr
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for mac_addr
// setter function is is datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysEntity.prototype.setMac_addr
//
function datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysEntity_getMac_addr() { return this._mac_addr;}

datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysEntity.prototype.getMac_addr = datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysEntity_getMac_addr;

function datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysEntity_setMac_addr(value) { this._mac_addr = value;}

datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysEntity.prototype.setMac_addr = datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysEntity_setMac_addr;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysEntity.prototype.getNas_port_id
// element get for nas_port_id
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for nas_port_id
// setter function is is datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysEntity.prototype.setNas_port_id
//
function datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysEntity_getNas_port_id() { return this._nas_port_id;}

datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysEntity.prototype.getNas_port_id = datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysEntity_getNas_port_id;

function datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysEntity_setNas_port_id(value) { this._nas_port_id = value;}

datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysEntity.prototype.setNas_port_id = datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysEntity_setNas_port_id;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysEntity.prototype.getTfp_code
// element get for tfp_code
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for tfp_code
// setter function is is datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysEntity.prototype.setTfp_code
//
function datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysEntity_getTfp_code() { return this._tfp_code;}

datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysEntity.prototype.getTfp_code = datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysEntity_getTfp_code;

function datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysEntity_setTfp_code(value) { this._tfp_code = value;}

datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysEntity.prototype.setTfp_code = datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysEntity_setTfp_code;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysEntity.prototype.getTfp_name
// element get for tfp_name
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for tfp_name
// setter function is is datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysEntity.prototype.setTfp_name
//
function datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysEntity_getTfp_name() { return this._tfp_name;}

datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysEntity.prototype.getTfp_name = datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysEntity_getTfp_name;

function datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysEntity_setTfp_name(value) { this._tfp_name = value;}

datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysEntity.prototype.setTfp_name = datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysEntity_setTfp_name;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysEntity.prototype.getErr_code
// element get for err_code
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for err_code
// setter function is is datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysEntity.prototype.setErr_code
//
function datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysEntity_getErr_code() { return this._err_code;}

datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysEntity.prototype.getErr_code = datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysEntity_getErr_code;

function datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysEntity_setErr_code(value) { this._err_code = value;}

datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysEntity.prototype.setErr_code = datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysEntity_setErr_code;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysEntity.prototype.getErr_string
// element get for err_string
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for err_string
// setter function is is datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysEntity.prototype.setErr_string
//
function datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysEntity_getErr_string() { return this._err_string;}

datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysEntity.prototype.getErr_string = datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysEntity_getErr_string;

function datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysEntity_setErr_string(value) { this._err_string = value;}

datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysEntity.prototype.setErr_string = datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysEntity_setErr_string;
//
// Serialize {http://datumnode.com/start/start_ip/radius}Get_Access_by_Login_SysEntity
//
function datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysEntity_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'DatumNode\' xmlns:jns1=\'http://datumnode.com/start/start_ip/radius\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._status != null) {
      xml = xml + '<jns1:status>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._status);
      xml = xml + '</jns1:status>';
     }
    }
    // block for local variables
    {
     if (this._zone_date == null) {
      xml = xml + '<jns1:zone_date xsi:nil=\'true\'/>';
     } else {
      xml = xml + '<jns1:zone_date>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._zone_date);
      xml = xml + '</jns1:zone_date>';
     }
    }
    // block for local variables
    {
     if (this._sys_date == null) {
      xml = xml + '<jns1:sys_date xsi:nil=\'true\'/>';
     } else {
      xml = xml + '<jns1:sys_date>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._sys_date);
      xml = xml + '</jns1:sys_date>';
     }
    }
    // block for local variables
    {
     if (this._nas_ip != null) {
      xml = xml + '<jns1:nas_ip>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._nas_ip);
      xml = xml + '</jns1:nas_ip>';
     }
    }
    // block for local variables
    {
     if (this._nas_name != null) {
      xml = xml + '<jns1:nas_name>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._nas_name);
      xml = xml + '</jns1:nas_name>';
     }
    }
    // block for local variables
    {
     if (this._nas_zone != null) {
      xml = xml + '<jns1:nas_zone>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._nas_zone);
      xml = xml + '</jns1:nas_zone>';
     }
    }
    // block for local variables
    {
     if (this._login != null) {
      xml = xml + '<jns1:login>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._login);
      xml = xml + '</jns1:login>';
     }
    }
    // block for local variables
    {
     if (this._mac_addr != null) {
      xml = xml + '<jns1:mac_addr>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._mac_addr);
      xml = xml + '</jns1:mac_addr>';
     }
    }
    // block for local variables
    {
     if (this._nas_port_id != null) {
      xml = xml + '<jns1:nas_port_id>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._nas_port_id);
      xml = xml + '</jns1:nas_port_id>';
     }
    }
    // block for local variables
    {
     if (this._tfp_code != null) {
      xml = xml + '<jns1:tfp_code>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._tfp_code);
      xml = xml + '</jns1:tfp_code>';
     }
    }
    // block for local variables
    {
     if (this._tfp_name != null) {
      xml = xml + '<jns1:tfp_name>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._tfp_name);
      xml = xml + '</jns1:tfp_name>';
     }
    }
    // block for local variables
    {
     if (this._err_code != null) {
      xml = xml + '<jns1:err_code>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._err_code);
      xml = xml + '</jns1:err_code>';
     }
    }
    // block for local variables
    {
     if (this._err_string != null) {
      xml = xml + '<jns1:err_string>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._err_string);
      xml = xml + '</jns1:err_string>';
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysEntity.prototype.serialize = datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysEntity_serialize;

function datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysEntity_deserialize (cxfjsutils, element) {
    var newobject = new datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysEntity();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing status');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'status')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setStatus(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing zone_date');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setZone_date(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing sys_date');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setSys_date(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing nas_ip');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'nas_ip')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setNas_ip(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing nas_name');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'nas_name')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setNas_name(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing nas_zone');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'nas_zone')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setNas_zone(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing login');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'login')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setLogin(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing mac_addr');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'mac_addr')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setMac_addr(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing nas_port_id');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'nas_port_id')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setNas_port_id(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing tfp_code');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'tfp_code')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setTfp_code(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing tfp_name');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'tfp_name')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setTfp_name(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing err_code');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'err_code')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setErr_code(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing err_string');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'err_string')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setErr_string(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://datumnode.com/start/start_ip/radius}Change_PasswordOutputParameters
//
function datumnode_com_start_start_ip_radius_Change_PasswordOutputParameters () {
    this.typeMarker = 'datumnode_com_start_start_ip_radius_Change_PasswordOutputParameters';
}

//
// Serialize {http://datumnode.com/start/start_ip/radius}Change_PasswordOutputParameters
//
function datumnode_com_start_start_ip_radius_Change_PasswordOutputParameters_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'DatumNode\' xmlns:jns1=\'http://datumnode.com/start/start_ip/radius\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

datumnode_com_start_start_ip_radius_Change_PasswordOutputParameters.prototype.serialize = datumnode_com_start_start_ip_radius_Change_PasswordOutputParameters_serialize;

function datumnode_com_start_start_ip_radius_Change_PasswordOutputParameters_deserialize (cxfjsutils, element) {
    var newobject = new datumnode_com_start_start_ip_radius_Change_PasswordOutputParameters();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    return newobject;
}

//
// Constructor for XML Schema item {http://datumnode.com/start/start_ip/radius}Get_Access_by_Login_SysOutputParameters
//
function datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysOutputParameters () {
    this.typeMarker = 'datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysOutputParameters';
}

//
// Serialize {http://datumnode.com/start/start_ip/radius}Get_Access_by_Login_SysOutputParameters
//
function datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysOutputParameters_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'DatumNode\' xmlns:jns1=\'http://datumnode.com/start/start_ip/radius\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysOutputParameters.prototype.serialize = datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysOutputParameters_serialize;

function datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysOutputParameters_deserialize (cxfjsutils, element) {
    var newobject = new datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysOutputParameters();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    return newobject;
}

//
// Constructor for XML Schema item {http://datumnode.com/start/start_ip/radius}Get_Srv_ListResult
//
function datumnode_com_start_start_ip_radius_Get_Srv_ListResult () {
    this.typeMarker = 'datumnode_com_start_start_ip_radius_Get_Srv_ListResult';
    this._Result = null;
    this._Parameters = null;
    this._ResultSet = null;
}

//
// accessor is datumnode_com_start_start_ip_radius_Get_Srv_ListResult.prototype.getResult
// element get for Result
// - element type is {DatumNode}DbResult
// - optional element
//
// element set for Result
// setter function is is datumnode_com_start_start_ip_radius_Get_Srv_ListResult.prototype.setResult
//
function datumnode_com_start_start_ip_radius_Get_Srv_ListResult_getResult() { return this._Result;}

datumnode_com_start_start_ip_radius_Get_Srv_ListResult.prototype.getResult = datumnode_com_start_start_ip_radius_Get_Srv_ListResult_getResult;

function datumnode_com_start_start_ip_radius_Get_Srv_ListResult_setResult(value) { this._Result = value;}

datumnode_com_start_start_ip_radius_Get_Srv_ListResult.prototype.setResult = datumnode_com_start_start_ip_radius_Get_Srv_ListResult_setResult;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Srv_ListResult.prototype.getParameters
// element get for Parameters
// - element type is {http://datumnode.com/start/start_ip/radius}Get_Srv_ListOutputParameters
// - optional element
//
// element set for Parameters
// setter function is is datumnode_com_start_start_ip_radius_Get_Srv_ListResult.prototype.setParameters
//
function datumnode_com_start_start_ip_radius_Get_Srv_ListResult_getParameters() { return this._Parameters;}

datumnode_com_start_start_ip_radius_Get_Srv_ListResult.prototype.getParameters = datumnode_com_start_start_ip_radius_Get_Srv_ListResult_getParameters;

function datumnode_com_start_start_ip_radius_Get_Srv_ListResult_setParameters(value) { this._Parameters = value;}

datumnode_com_start_start_ip_radius_Get_Srv_ListResult.prototype.setParameters = datumnode_com_start_start_ip_radius_Get_Srv_ListResult_setParameters;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Srv_ListResult.prototype.getResultSet
// element get for ResultSet
// - element type is {http://datumnode.com/start/start_ip/radius}ArrayOfGet_Srv_ListEntity
// - optional element
//
// element set for ResultSet
// setter function is is datumnode_com_start_start_ip_radius_Get_Srv_ListResult.prototype.setResultSet
//
function datumnode_com_start_start_ip_radius_Get_Srv_ListResult_getResultSet() { return this._ResultSet;}

datumnode_com_start_start_ip_radius_Get_Srv_ListResult.prototype.getResultSet = datumnode_com_start_start_ip_radius_Get_Srv_ListResult_getResultSet;

function datumnode_com_start_start_ip_radius_Get_Srv_ListResult_setResultSet(value) { this._ResultSet = value;}

datumnode_com_start_start_ip_radius_Get_Srv_ListResult.prototype.setResultSet = datumnode_com_start_start_ip_radius_Get_Srv_ListResult_setResultSet;
//
// Serialize {http://datumnode.com/start/start_ip/radius}Get_Srv_ListResult
//
function datumnode_com_start_start_ip_radius_Get_Srv_ListResult_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'DatumNode\' xmlns:jns1=\'http://datumnode.com/start/start_ip/radius\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._Result != null) {
      xml = xml + this._Result.serialize(cxfjsutils, 'jns0:Result', null);
     }
    }
    // block for local variables
    {
     if (this._Parameters != null) {
      xml = xml + this._Parameters.serialize(cxfjsutils, 'jns1:Parameters', null);
     }
    }
    // block for local variables
    {
     if (this._ResultSet != null) {
      xml = xml + this._ResultSet.serialize(cxfjsutils, 'jns1:ResultSet', null);
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

datumnode_com_start_start_ip_radius_Get_Srv_ListResult.prototype.serialize = datumnode_com_start_start_ip_radius_Get_Srv_ListResult_serialize;

function datumnode_com_start_start_ip_radius_Get_Srv_ListResult_deserialize (cxfjsutils, element) {
    var newobject = new datumnode_com_start_start_ip_radius_Get_Srv_ListResult();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Result');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'DatumNode', 'Result')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = DN_DbResult_deserialize(cxfjsutils, curElement);
     }
     newobject.setResult(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Parameters');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'Parameters')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = datumnode_com_start_start_ip_radius_Get_Srv_ListOutputParameters_deserialize(cxfjsutils, curElement);
     }
     newobject.setParameters(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing ResultSet');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'ResultSet')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = datumnode_com_start_start_ip_radius_ArrayOfGet_Srv_ListEntity_deserialize(cxfjsutils, curElement);
     }
     newobject.setResultSet(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://datumnode.com/start/start_ip/radius}Stop_Radius_SessionInputParameters
//
function datumnode_com_start_start_ip_radius_Stop_Radius_SessionInputParameters () {
    this.typeMarker = 'datumnode_com_start_start_ip_radius_Stop_Radius_SessionInputParameters';
    this._p_Filial = null;
    this._p_Login = null;
}

//
// accessor is datumnode_com_start_start_ip_radius_Stop_Radius_SessionInputParameters.prototype.getP_Filial
// element get for p_Filial
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for p_Filial
// setter function is is datumnode_com_start_start_ip_radius_Stop_Radius_SessionInputParameters.prototype.setP_Filial
//
function datumnode_com_start_start_ip_radius_Stop_Radius_SessionInputParameters_getP_Filial() { return this._p_Filial;}

datumnode_com_start_start_ip_radius_Stop_Radius_SessionInputParameters.prototype.getP_Filial = datumnode_com_start_start_ip_radius_Stop_Radius_SessionInputParameters_getP_Filial;

function datumnode_com_start_start_ip_radius_Stop_Radius_SessionInputParameters_setP_Filial(value) { this._p_Filial = value;}

datumnode_com_start_start_ip_radius_Stop_Radius_SessionInputParameters.prototype.setP_Filial = datumnode_com_start_start_ip_radius_Stop_Radius_SessionInputParameters_setP_Filial;
//
// accessor is datumnode_com_start_start_ip_radius_Stop_Radius_SessionInputParameters.prototype.getP_Login
// element get for p_Login
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for p_Login
// setter function is is datumnode_com_start_start_ip_radius_Stop_Radius_SessionInputParameters.prototype.setP_Login
//
function datumnode_com_start_start_ip_radius_Stop_Radius_SessionInputParameters_getP_Login() { return this._p_Login;}

datumnode_com_start_start_ip_radius_Stop_Radius_SessionInputParameters.prototype.getP_Login = datumnode_com_start_start_ip_radius_Stop_Radius_SessionInputParameters_getP_Login;

function datumnode_com_start_start_ip_radius_Stop_Radius_SessionInputParameters_setP_Login(value) { this._p_Login = value;}

datumnode_com_start_start_ip_radius_Stop_Radius_SessionInputParameters.prototype.setP_Login = datumnode_com_start_start_ip_radius_Stop_Radius_SessionInputParameters_setP_Login;
//
// Serialize {http://datumnode.com/start/start_ip/radius}Stop_Radius_SessionInputParameters
//
function datumnode_com_start_start_ip_radius_Stop_Radius_SessionInputParameters_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'DatumNode\' xmlns:jns1=\'http://datumnode.com/start/start_ip/radius\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._p_Filial != null) {
      xml = xml + '<jns1:p_Filial>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._p_Filial);
      xml = xml + '</jns1:p_Filial>';
     }
    }
    // block for local variables
    {
     if (this._p_Login != null) {
      xml = xml + '<jns1:p_Login>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._p_Login);
      xml = xml + '</jns1:p_Login>';
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

datumnode_com_start_start_ip_radius_Stop_Radius_SessionInputParameters.prototype.serialize = datumnode_com_start_start_ip_radius_Stop_Radius_SessionInputParameters_serialize;

function datumnode_com_start_start_ip_radius_Stop_Radius_SessionInputParameters_deserialize (cxfjsutils, element) {
    var newobject = new datumnode_com_start_start_ip_radius_Stop_Radius_SessionInputParameters();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing p_Filial');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'p_Filial')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setP_Filial(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing p_Login');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'p_Login')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setP_Login(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://datumnode.com/start/start_ip/radius}Get_Sessions_by_Login_SysRequest
//
function datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysRequest () {
    this.typeMarker = 'datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysRequest';
    this._Id = null;
    this._Connection = null;
    this._Command = null;
    this._Parameters = null;
}

//
// accessor is datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysRequest.prototype.getId
// element get for Id
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - optional element
//
// element set for Id
// setter function is is datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysRequest.prototype.setId
//
function datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysRequest_getId() { return this._Id;}

datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysRequest.prototype.getId = datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysRequest_getId;

function datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysRequest_setId(value) { this._Id = value;}

datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysRequest.prototype.setId = datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysRequest_setId;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysRequest.prototype.getConnection
// element get for Connection
// - element type is {DatumNode}MetaConnection
// - optional element
//
// element set for Connection
// setter function is is datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysRequest.prototype.setConnection
//
function datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysRequest_getConnection() { return this._Connection;}

datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysRequest.prototype.getConnection = datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysRequest_getConnection;

function datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysRequest_setConnection(value) { this._Connection = value;}

datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysRequest.prototype.setConnection = datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysRequest_setConnection;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysRequest.prototype.getCommand
// element get for Command
// - element type is {DatumNode}MetaCommand
// - optional element
//
// element set for Command
// setter function is is datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysRequest.prototype.setCommand
//
function datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysRequest_getCommand() { return this._Command;}

datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysRequest.prototype.getCommand = datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysRequest_getCommand;

function datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysRequest_setCommand(value) { this._Command = value;}

datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysRequest.prototype.setCommand = datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysRequest_setCommand;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysRequest.prototype.getParameters
// element get for Parameters
// - element type is {http://datumnode.com/start/start_ip/radius}Get_Sessions_by_Login_SysInputParameters
// - optional element
//
// element set for Parameters
// setter function is is datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysRequest.prototype.setParameters
//
function datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysRequest_getParameters() { return this._Parameters;}

datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysRequest.prototype.getParameters = datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysRequest_getParameters;

function datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysRequest_setParameters(value) { this._Parameters = value;}

datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysRequest.prototype.setParameters = datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysRequest_setParameters;
//
// Serialize {http://datumnode.com/start/start_ip/radius}Get_Sessions_by_Login_SysRequest
//
function datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysRequest_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'DatumNode\' xmlns:jns1=\'http://datumnode.com/start/start_ip/radius\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._Id != null) {
      xml = xml + '<jns1:Id>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._Id);
      xml = xml + '</jns1:Id>';
     }
    }
    // block for local variables
    {
     if (this._Connection != null) {
      xml = xml + this._Connection.serialize(cxfjsutils, 'jns0:Connection', null);
     }
    }
    // block for local variables
    {
     if (this._Command != null) {
      xml = xml + this._Command.serialize(cxfjsutils, 'jns0:Command', null);
     }
    }
    // block for local variables
    {
     if (this._Parameters != null) {
      xml = xml + this._Parameters.serialize(cxfjsutils, 'jns1:Parameters', null);
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysRequest.prototype.serialize = datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysRequest_serialize;

function datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysRequest_deserialize (cxfjsutils, element) {
    var newobject = new datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysRequest();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Id');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'Id')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = parseInt(value);
     }
     newobject.setId(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Connection');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'DatumNode', 'Connection')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = DN_MetaConnection_deserialize(cxfjsutils, curElement);
     }
     newobject.setConnection(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Command');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'DatumNode', 'Command')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = DN_MetaCommand_deserialize(cxfjsutils, curElement);
     }
     newobject.setCommand(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Parameters');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'Parameters')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysInputParameters_deserialize(cxfjsutils, curElement);
     }
     newobject.setParameters(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://datumnode.com/start/start_ip/radius}Get_Dev_LoginInputParameters
//
function datumnode_com_start_start_ip_radius_Get_Dev_LoginInputParameters () {
    this.typeMarker = 'datumnode_com_start_start_ip_radius_Get_Dev_LoginInputParameters';
    this._p_Filial = null;
    this._p_Dev_ID = null;
}

//
// accessor is datumnode_com_start_start_ip_radius_Get_Dev_LoginInputParameters.prototype.getP_Filial
// element get for p_Filial
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for p_Filial
// setter function is is datumnode_com_start_start_ip_radius_Get_Dev_LoginInputParameters.prototype.setP_Filial
//
function datumnode_com_start_start_ip_radius_Get_Dev_LoginInputParameters_getP_Filial() { return this._p_Filial;}

datumnode_com_start_start_ip_radius_Get_Dev_LoginInputParameters.prototype.getP_Filial = datumnode_com_start_start_ip_radius_Get_Dev_LoginInputParameters_getP_Filial;

function datumnode_com_start_start_ip_radius_Get_Dev_LoginInputParameters_setP_Filial(value) { this._p_Filial = value;}

datumnode_com_start_start_ip_radius_Get_Dev_LoginInputParameters.prototype.setP_Filial = datumnode_com_start_start_ip_radius_Get_Dev_LoginInputParameters_setP_Filial;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Dev_LoginInputParameters.prototype.getP_Dev_ID
// element get for p_Dev_ID
// - element type is {http://www.w3.org/2001/XMLSchema}decimal
// - required element
// - nillable
//
// element set for p_Dev_ID
// setter function is is datumnode_com_start_start_ip_radius_Get_Dev_LoginInputParameters.prototype.setP_Dev_ID
//
function datumnode_com_start_start_ip_radius_Get_Dev_LoginInputParameters_getP_Dev_ID() { return this._p_Dev_ID;}

datumnode_com_start_start_ip_radius_Get_Dev_LoginInputParameters.prototype.getP_Dev_ID = datumnode_com_start_start_ip_radius_Get_Dev_LoginInputParameters_getP_Dev_ID;

function datumnode_com_start_start_ip_radius_Get_Dev_LoginInputParameters_setP_Dev_ID(value) { this._p_Dev_ID = value;}

datumnode_com_start_start_ip_radius_Get_Dev_LoginInputParameters.prototype.setP_Dev_ID = datumnode_com_start_start_ip_radius_Get_Dev_LoginInputParameters_setP_Dev_ID;
//
// Serialize {http://datumnode.com/start/start_ip/radius}Get_Dev_LoginInputParameters
//
function datumnode_com_start_start_ip_radius_Get_Dev_LoginInputParameters_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'DatumNode\' xmlns:jns1=\'http://datumnode.com/start/start_ip/radius\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._p_Filial != null) {
      xml = xml + '<jns1:p_Filial>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._p_Filial);
      xml = xml + '</jns1:p_Filial>';
     }
    }
    // block for local variables
    {
     if (this._p_Dev_ID == null) {
      xml = xml + '<jns1:p_Dev_ID xsi:nil=\'true\'/>';
     } else {
      xml = xml + '<jns1:p_Dev_ID>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._p_Dev_ID);
      xml = xml + '</jns1:p_Dev_ID>';
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

datumnode_com_start_start_ip_radius_Get_Dev_LoginInputParameters.prototype.serialize = datumnode_com_start_start_ip_radius_Get_Dev_LoginInputParameters_serialize;

function datumnode_com_start_start_ip_radius_Get_Dev_LoginInputParameters_deserialize (cxfjsutils, element) {
    var newobject = new datumnode_com_start_start_ip_radius_Get_Dev_LoginInputParameters();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing p_Filial');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'p_Filial')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setP_Filial(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing p_Dev_ID');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setP_Dev_ID(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://datumnode.com/start/start_ip/radius}Get_Access_by_Login_SysResult
//
function datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysResult () {
    this.typeMarker = 'datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysResult';
    this._Result = null;
    this._Parameters = null;
    this._ResultSet = null;
}

//
// accessor is datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysResult.prototype.getResult
// element get for Result
// - element type is {DatumNode}DbResult
// - optional element
//
// element set for Result
// setter function is is datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysResult.prototype.setResult
//
function datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysResult_getResult() { return this._Result;}

datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysResult.prototype.getResult = datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysResult_getResult;

function datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysResult_setResult(value) { this._Result = value;}

datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysResult.prototype.setResult = datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysResult_setResult;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysResult.prototype.getParameters
// element get for Parameters
// - element type is {http://datumnode.com/start/start_ip/radius}Get_Access_by_Login_SysOutputParameters
// - optional element
//
// element set for Parameters
// setter function is is datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysResult.prototype.setParameters
//
function datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysResult_getParameters() { return this._Parameters;}

datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysResult.prototype.getParameters = datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysResult_getParameters;

function datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysResult_setParameters(value) { this._Parameters = value;}

datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysResult.prototype.setParameters = datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysResult_setParameters;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysResult.prototype.getResultSet
// element get for ResultSet
// - element type is {http://datumnode.com/start/start_ip/radius}ArrayOfGet_Access_by_Login_SysEntity
// - optional element
//
// element set for ResultSet
// setter function is is datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysResult.prototype.setResultSet
//
function datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysResult_getResultSet() { return this._ResultSet;}

datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysResult.prototype.getResultSet = datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysResult_getResultSet;

function datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysResult_setResultSet(value) { this._ResultSet = value;}

datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysResult.prototype.setResultSet = datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysResult_setResultSet;
//
// Serialize {http://datumnode.com/start/start_ip/radius}Get_Access_by_Login_SysResult
//
function datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysResult_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'DatumNode\' xmlns:jns1=\'http://datumnode.com/start/start_ip/radius\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._Result != null) {
      xml = xml + this._Result.serialize(cxfjsutils, 'jns0:Result', null);
     }
    }
    // block for local variables
    {
     if (this._Parameters != null) {
      xml = xml + this._Parameters.serialize(cxfjsutils, 'jns1:Parameters', null);
     }
    }
    // block for local variables
    {
     if (this._ResultSet != null) {
      xml = xml + this._ResultSet.serialize(cxfjsutils, 'jns1:ResultSet', null);
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysResult.prototype.serialize = datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysResult_serialize;

function datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysResult_deserialize (cxfjsutils, element) {
    var newobject = new datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysResult();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Result');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'DatumNode', 'Result')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = DN_DbResult_deserialize(cxfjsutils, curElement);
     }
     newobject.setResult(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Parameters');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'Parameters')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysOutputParameters_deserialize(cxfjsutils, curElement);
     }
     newobject.setParameters(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing ResultSet');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'ResultSet')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = datumnode_com_start_start_ip_radius_ArrayOfGet_Access_by_Login_SysEntity_deserialize(cxfjsutils, curElement);
     }
     newobject.setResultSet(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://datumnode.com/start/start_ip/radius}Get_Access_by_Login_SysInputParameters
//
function datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysInputParameters () {
    this.typeMarker = 'datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysInputParameters';
    this._p_Filial = null;
    this._p_Interval = null;
    this._p_Login = null;
}

//
// accessor is datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysInputParameters.prototype.getP_Filial
// element get for p_Filial
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for p_Filial
// setter function is is datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysInputParameters.prototype.setP_Filial
//
function datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysInputParameters_getP_Filial() { return this._p_Filial;}

datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysInputParameters.prototype.getP_Filial = datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysInputParameters_getP_Filial;

function datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysInputParameters_setP_Filial(value) { this._p_Filial = value;}

datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysInputParameters.prototype.setP_Filial = datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysInputParameters_setP_Filial;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysInputParameters.prototype.getP_Interval
// element get for p_Interval
// - element type is {http://www.w3.org/2001/XMLSchema}decimal
// - required element
// - nillable
//
// element set for p_Interval
// setter function is is datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysInputParameters.prototype.setP_Interval
//
function datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysInputParameters_getP_Interval() { return this._p_Interval;}

datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysInputParameters.prototype.getP_Interval = datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysInputParameters_getP_Interval;

function datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysInputParameters_setP_Interval(value) { this._p_Interval = value;}

datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysInputParameters.prototype.setP_Interval = datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysInputParameters_setP_Interval;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysInputParameters.prototype.getP_Login
// element get for p_Login
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for p_Login
// setter function is is datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysInputParameters.prototype.setP_Login
//
function datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysInputParameters_getP_Login() { return this._p_Login;}

datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysInputParameters.prototype.getP_Login = datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysInputParameters_getP_Login;

function datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysInputParameters_setP_Login(value) { this._p_Login = value;}

datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysInputParameters.prototype.setP_Login = datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysInputParameters_setP_Login;
//
// Serialize {http://datumnode.com/start/start_ip/radius}Get_Access_by_Login_SysInputParameters
//
function datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysInputParameters_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'DatumNode\' xmlns:jns1=\'http://datumnode.com/start/start_ip/radius\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._p_Filial != null) {
      xml = xml + '<jns1:p_Filial>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._p_Filial);
      xml = xml + '</jns1:p_Filial>';
     }
    }
    // block for local variables
    {
     if (this._p_Interval == null) {
      xml = xml + '<jns1:p_Interval xsi:nil=\'true\'/>';
     } else {
      xml = xml + '<jns1:p_Interval>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._p_Interval);
      xml = xml + '</jns1:p_Interval>';
     }
    }
    // block for local variables
    {
     if (this._p_Login != null) {
      xml = xml + '<jns1:p_Login>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._p_Login);
      xml = xml + '</jns1:p_Login>';
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysInputParameters.prototype.serialize = datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysInputParameters_serialize;

function datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysInputParameters_deserialize (cxfjsutils, element) {
    var newobject = new datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysInputParameters();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing p_Filial');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'p_Filial')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setP_Filial(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing p_Interval');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setP_Interval(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing p_Login');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'p_Login')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setP_Login(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://datumnode.com/start/start_ip/radius}ArrayOfGet_Srv_ListEntity
//
function datumnode_com_start_start_ip_radius_ArrayOfGet_Srv_ListEntity () {
    this.typeMarker = 'datumnode_com_start_start_ip_radius_ArrayOfGet_Srv_ListEntity';
    this._Get_Srv_ListEntity = [];
}

//
// accessor is datumnode_com_start_start_ip_radius_ArrayOfGet_Srv_ListEntity.prototype.getGet_Srv_ListEntity
// element get for Get_Srv_ListEntity
// - element type is {http://datumnode.com/start/start_ip/radius}Get_Srv_ListEntity
// - required element
// - array
// - nillable
//
// element set for Get_Srv_ListEntity
// setter function is is datumnode_com_start_start_ip_radius_ArrayOfGet_Srv_ListEntity.prototype.setGet_Srv_ListEntity
//
function datumnode_com_start_start_ip_radius_ArrayOfGet_Srv_ListEntity_getGet_Srv_ListEntity() { return this._Get_Srv_ListEntity;}

datumnode_com_start_start_ip_radius_ArrayOfGet_Srv_ListEntity.prototype.getGet_Srv_ListEntity = datumnode_com_start_start_ip_radius_ArrayOfGet_Srv_ListEntity_getGet_Srv_ListEntity;

function datumnode_com_start_start_ip_radius_ArrayOfGet_Srv_ListEntity_setGet_Srv_ListEntity(value) { this._Get_Srv_ListEntity = value;}

datumnode_com_start_start_ip_radius_ArrayOfGet_Srv_ListEntity.prototype.setGet_Srv_ListEntity = datumnode_com_start_start_ip_radius_ArrayOfGet_Srv_ListEntity_setGet_Srv_ListEntity;
//
// Serialize {http://datumnode.com/start/start_ip/radius}ArrayOfGet_Srv_ListEntity
//
function datumnode_com_start_start_ip_radius_ArrayOfGet_Srv_ListEntity_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'DatumNode\' xmlns:jns1=\'http://datumnode.com/start/start_ip/radius\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._Get_Srv_ListEntity != null) {
      for (var ax = 0;ax < this._Get_Srv_ListEntity.length;ax ++) {
       if (this._Get_Srv_ListEntity[ax] == null) {
        xml = xml + '<jns1:Get_Srv_ListEntity xsi:nil=\'true\'/>';
       } else {
        xml = xml + this._Get_Srv_ListEntity[ax].serialize(cxfjsutils, 'jns1:Get_Srv_ListEntity', null);
       }
      }
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

datumnode_com_start_start_ip_radius_ArrayOfGet_Srv_ListEntity.prototype.serialize = datumnode_com_start_start_ip_radius_ArrayOfGet_Srv_ListEntity_serialize;

function datumnode_com_start_start_ip_radius_ArrayOfGet_Srv_ListEntity_deserialize (cxfjsutils, element) {
    var newobject = new datumnode_com_start_start_ip_radius_ArrayOfGet_Srv_ListEntity();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Get_Srv_ListEntity');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'Get_Srv_ListEntity')) {
     item = [];
     do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       arrayItem = datumnode_com_start_start_ip_radius_Get_Srv_ListEntity_deserialize(cxfjsutils, curElement);
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'Get_Srv_ListEntity'));
     newobject.setGet_Srv_ListEntity(item);
     var item = null;
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://datumnode.com/start/start_ip/radius}Check_ProfileInputParameters
//
function datumnode_com_start_start_ip_radius_Check_ProfileInputParameters () {
    this.typeMarker = 'datumnode_com_start_start_ip_radius_Check_ProfileInputParameters';
    this._p_Filial = null;
    this._p_Login = null;
}

//
// accessor is datumnode_com_start_start_ip_radius_Check_ProfileInputParameters.prototype.getP_Filial
// element get for p_Filial
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for p_Filial
// setter function is is datumnode_com_start_start_ip_radius_Check_ProfileInputParameters.prototype.setP_Filial
//
function datumnode_com_start_start_ip_radius_Check_ProfileInputParameters_getP_Filial() { return this._p_Filial;}

datumnode_com_start_start_ip_radius_Check_ProfileInputParameters.prototype.getP_Filial = datumnode_com_start_start_ip_radius_Check_ProfileInputParameters_getP_Filial;

function datumnode_com_start_start_ip_radius_Check_ProfileInputParameters_setP_Filial(value) { this._p_Filial = value;}

datumnode_com_start_start_ip_radius_Check_ProfileInputParameters.prototype.setP_Filial = datumnode_com_start_start_ip_radius_Check_ProfileInputParameters_setP_Filial;
//
// accessor is datumnode_com_start_start_ip_radius_Check_ProfileInputParameters.prototype.getP_Login
// element get for p_Login
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for p_Login
// setter function is is datumnode_com_start_start_ip_radius_Check_ProfileInputParameters.prototype.setP_Login
//
function datumnode_com_start_start_ip_radius_Check_ProfileInputParameters_getP_Login() { return this._p_Login;}

datumnode_com_start_start_ip_radius_Check_ProfileInputParameters.prototype.getP_Login = datumnode_com_start_start_ip_radius_Check_ProfileInputParameters_getP_Login;

function datumnode_com_start_start_ip_radius_Check_ProfileInputParameters_setP_Login(value) { this._p_Login = value;}

datumnode_com_start_start_ip_radius_Check_ProfileInputParameters.prototype.setP_Login = datumnode_com_start_start_ip_radius_Check_ProfileInputParameters_setP_Login;
//
// Serialize {http://datumnode.com/start/start_ip/radius}Check_ProfileInputParameters
//
function datumnode_com_start_start_ip_radius_Check_ProfileInputParameters_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'DatumNode\' xmlns:jns1=\'http://datumnode.com/start/start_ip/radius\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._p_Filial != null) {
      xml = xml + '<jns1:p_Filial>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._p_Filial);
      xml = xml + '</jns1:p_Filial>';
     }
    }
    // block for local variables
    {
     if (this._p_Login != null) {
      xml = xml + '<jns1:p_Login>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._p_Login);
      xml = xml + '</jns1:p_Login>';
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

datumnode_com_start_start_ip_radius_Check_ProfileInputParameters.prototype.serialize = datumnode_com_start_start_ip_radius_Check_ProfileInputParameters_serialize;

function datumnode_com_start_start_ip_radius_Check_ProfileInputParameters_deserialize (cxfjsutils, element) {
    var newobject = new datumnode_com_start_start_ip_radius_Check_ProfileInputParameters();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing p_Filial');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'p_Filial')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setP_Filial(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing p_Login');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'p_Login')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setP_Login(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://datumnode.com/start/start_ip/radius}Check_ProfileOutputParameters
//
function datumnode_com_start_start_ip_radius_Check_ProfileOutputParameters () {
    this.typeMarker = 'datumnode_com_start_start_ip_radius_Check_ProfileOutputParameters';
}

//
// Serialize {http://datumnode.com/start/start_ip/radius}Check_ProfileOutputParameters
//
function datumnode_com_start_start_ip_radius_Check_ProfileOutputParameters_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'DatumNode\' xmlns:jns1=\'http://datumnode.com/start/start_ip/radius\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

datumnode_com_start_start_ip_radius_Check_ProfileOutputParameters.prototype.serialize = datumnode_com_start_start_ip_radius_Check_ProfileOutputParameters_serialize;

function datumnode_com_start_start_ip_radius_Check_ProfileOutputParameters_deserialize (cxfjsutils, element) {
    var newobject = new datumnode_com_start_start_ip_radius_Check_ProfileOutputParameters();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    return newobject;
}

//
// Constructor for XML Schema item {http://datumnode.com/start/start_ip/radius}Get_Sessions_by_LoginResult
//
function datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginResult () {
    this.typeMarker = 'datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginResult';
    this._Result = null;
    this._Parameters = null;
    this._ResultSet = null;
}

//
// accessor is datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginResult.prototype.getResult
// element get for Result
// - element type is {DatumNode}DbResult
// - optional element
//
// element set for Result
// setter function is is datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginResult.prototype.setResult
//
function datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginResult_getResult() { return this._Result;}

datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginResult.prototype.getResult = datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginResult_getResult;

function datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginResult_setResult(value) { this._Result = value;}

datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginResult.prototype.setResult = datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginResult_setResult;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginResult.prototype.getParameters
// element get for Parameters
// - element type is {http://datumnode.com/start/start_ip/radius}Get_Sessions_by_LoginOutputParameters
// - optional element
//
// element set for Parameters
// setter function is is datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginResult.prototype.setParameters
//
function datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginResult_getParameters() { return this._Parameters;}

datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginResult.prototype.getParameters = datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginResult_getParameters;

function datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginResult_setParameters(value) { this._Parameters = value;}

datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginResult.prototype.setParameters = datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginResult_setParameters;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginResult.prototype.getResultSet
// element get for ResultSet
// - element type is {http://datumnode.com/start/start_ip/radius}ArrayOfGet_Sessions_by_LoginEntity
// - optional element
//
// element set for ResultSet
// setter function is is datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginResult.prototype.setResultSet
//
function datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginResult_getResultSet() { return this._ResultSet;}

datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginResult.prototype.getResultSet = datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginResult_getResultSet;

function datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginResult_setResultSet(value) { this._ResultSet = value;}

datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginResult.prototype.setResultSet = datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginResult_setResultSet;
//
// Serialize {http://datumnode.com/start/start_ip/radius}Get_Sessions_by_LoginResult
//
function datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginResult_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'DatumNode\' xmlns:jns1=\'http://datumnode.com/start/start_ip/radius\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._Result != null) {
      xml = xml + this._Result.serialize(cxfjsutils, 'jns0:Result', null);
     }
    }
    // block for local variables
    {
     if (this._Parameters != null) {
      xml = xml + this._Parameters.serialize(cxfjsutils, 'jns1:Parameters', null);
     }
    }
    // block for local variables
    {
     if (this._ResultSet != null) {
      xml = xml + this._ResultSet.serialize(cxfjsutils, 'jns1:ResultSet', null);
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginResult.prototype.serialize = datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginResult_serialize;

function datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginResult_deserialize (cxfjsutils, element) {
    var newobject = new datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginResult();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Result');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'DatumNode', 'Result')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = DN_DbResult_deserialize(cxfjsutils, curElement);
     }
     newobject.setResult(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Parameters');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'Parameters')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginOutputParameters_deserialize(cxfjsutils, curElement);
     }
     newobject.setParameters(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing ResultSet');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'ResultSet')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = datumnode_com_start_start_ip_radius_ArrayOfGet_Sessions_by_LoginEntity_deserialize(cxfjsutils, curElement);
     }
     newobject.setResultSet(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://datumnode.com/start/start_ip/radius}Get_Srv_ListOutputParameters
//
function datumnode_com_start_start_ip_radius_Get_Srv_ListOutputParameters () {
    this.typeMarker = 'datumnode_com_start_start_ip_radius_Get_Srv_ListOutputParameters';
}

//
// Serialize {http://datumnode.com/start/start_ip/radius}Get_Srv_ListOutputParameters
//
function datumnode_com_start_start_ip_radius_Get_Srv_ListOutputParameters_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'DatumNode\' xmlns:jns1=\'http://datumnode.com/start/start_ip/radius\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

datumnode_com_start_start_ip_radius_Get_Srv_ListOutputParameters.prototype.serialize = datumnode_com_start_start_ip_radius_Get_Srv_ListOutputParameters_serialize;

function datumnode_com_start_start_ip_radius_Get_Srv_ListOutputParameters_deserialize (cxfjsutils, element) {
    var newobject = new datumnode_com_start_start_ip_radius_Get_Srv_ListOutputParameters();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    return newobject;
}

//
// Constructor for XML Schema item {http://datumnode.com/start/start_ip/radius}Get_Access_by_LoginRequest
//
function datumnode_com_start_start_ip_radius_Get_Access_by_LoginRequest () {
    this.typeMarker = 'datumnode_com_start_start_ip_radius_Get_Access_by_LoginRequest';
    this._Id = null;
    this._Connection = null;
    this._Command = null;
    this._Parameters = null;
}

//
// accessor is datumnode_com_start_start_ip_radius_Get_Access_by_LoginRequest.prototype.getId
// element get for Id
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - optional element
//
// element set for Id
// setter function is is datumnode_com_start_start_ip_radius_Get_Access_by_LoginRequest.prototype.setId
//
function datumnode_com_start_start_ip_radius_Get_Access_by_LoginRequest_getId() { return this._Id;}

datumnode_com_start_start_ip_radius_Get_Access_by_LoginRequest.prototype.getId = datumnode_com_start_start_ip_radius_Get_Access_by_LoginRequest_getId;

function datumnode_com_start_start_ip_radius_Get_Access_by_LoginRequest_setId(value) { this._Id = value;}

datumnode_com_start_start_ip_radius_Get_Access_by_LoginRequest.prototype.setId = datumnode_com_start_start_ip_radius_Get_Access_by_LoginRequest_setId;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Access_by_LoginRequest.prototype.getConnection
// element get for Connection
// - element type is {DatumNode}MetaConnection
// - optional element
//
// element set for Connection
// setter function is is datumnode_com_start_start_ip_radius_Get_Access_by_LoginRequest.prototype.setConnection
//
function datumnode_com_start_start_ip_radius_Get_Access_by_LoginRequest_getConnection() { return this._Connection;}

datumnode_com_start_start_ip_radius_Get_Access_by_LoginRequest.prototype.getConnection = datumnode_com_start_start_ip_radius_Get_Access_by_LoginRequest_getConnection;

function datumnode_com_start_start_ip_radius_Get_Access_by_LoginRequest_setConnection(value) { this._Connection = value;}

datumnode_com_start_start_ip_radius_Get_Access_by_LoginRequest.prototype.setConnection = datumnode_com_start_start_ip_radius_Get_Access_by_LoginRequest_setConnection;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Access_by_LoginRequest.prototype.getCommand
// element get for Command
// - element type is {DatumNode}MetaCommand
// - optional element
//
// element set for Command
// setter function is is datumnode_com_start_start_ip_radius_Get_Access_by_LoginRequest.prototype.setCommand
//
function datumnode_com_start_start_ip_radius_Get_Access_by_LoginRequest_getCommand() { return this._Command;}

datumnode_com_start_start_ip_radius_Get_Access_by_LoginRequest.prototype.getCommand = datumnode_com_start_start_ip_radius_Get_Access_by_LoginRequest_getCommand;

function datumnode_com_start_start_ip_radius_Get_Access_by_LoginRequest_setCommand(value) { this._Command = value;}

datumnode_com_start_start_ip_radius_Get_Access_by_LoginRequest.prototype.setCommand = datumnode_com_start_start_ip_radius_Get_Access_by_LoginRequest_setCommand;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Access_by_LoginRequest.prototype.getParameters
// element get for Parameters
// - element type is {http://datumnode.com/start/start_ip/radius}Get_Access_by_LoginInputParameters
// - optional element
//
// element set for Parameters
// setter function is is datumnode_com_start_start_ip_radius_Get_Access_by_LoginRequest.prototype.setParameters
//
function datumnode_com_start_start_ip_radius_Get_Access_by_LoginRequest_getParameters() { return this._Parameters;}

datumnode_com_start_start_ip_radius_Get_Access_by_LoginRequest.prototype.getParameters = datumnode_com_start_start_ip_radius_Get_Access_by_LoginRequest_getParameters;

function datumnode_com_start_start_ip_radius_Get_Access_by_LoginRequest_setParameters(value) { this._Parameters = value;}

datumnode_com_start_start_ip_radius_Get_Access_by_LoginRequest.prototype.setParameters = datumnode_com_start_start_ip_radius_Get_Access_by_LoginRequest_setParameters;
//
// Serialize {http://datumnode.com/start/start_ip/radius}Get_Access_by_LoginRequest
//
function datumnode_com_start_start_ip_radius_Get_Access_by_LoginRequest_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'DatumNode\' xmlns:jns1=\'http://datumnode.com/start/start_ip/radius\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._Id != null) {
      xml = xml + '<jns1:Id>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._Id);
      xml = xml + '</jns1:Id>';
     }
    }
    // block for local variables
    {
     if (this._Connection != null) {
      xml = xml + this._Connection.serialize(cxfjsutils, 'jns0:Connection', null);
     }
    }
    // block for local variables
    {
     if (this._Command != null) {
      xml = xml + this._Command.serialize(cxfjsutils, 'jns0:Command', null);
     }
    }
    // block for local variables
    {
     if (this._Parameters != null) {
      xml = xml + this._Parameters.serialize(cxfjsutils, 'jns1:Parameters', null);
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

datumnode_com_start_start_ip_radius_Get_Access_by_LoginRequest.prototype.serialize = datumnode_com_start_start_ip_radius_Get_Access_by_LoginRequest_serialize;

function datumnode_com_start_start_ip_radius_Get_Access_by_LoginRequest_deserialize (cxfjsutils, element) {
    var newobject = new datumnode_com_start_start_ip_radius_Get_Access_by_LoginRequest();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Id');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'Id')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = parseInt(value);
     }
     newobject.setId(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Connection');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'DatumNode', 'Connection')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = DN_MetaConnection_deserialize(cxfjsutils, curElement);
     }
     newobject.setConnection(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Command');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'DatumNode', 'Command')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = DN_MetaCommand_deserialize(cxfjsutils, curElement);
     }
     newobject.setCommand(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Parameters');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'Parameters')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = datumnode_com_start_start_ip_radius_Get_Access_by_LoginInputParameters_deserialize(cxfjsutils, curElement);
     }
     newobject.setParameters(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://datumnode.com/start/start_ip/radius}Change_PasswordRequest
//
function datumnode_com_start_start_ip_radius_Change_PasswordRequest () {
    this.typeMarker = 'datumnode_com_start_start_ip_radius_Change_PasswordRequest';
    this._Id = null;
    this._Connection = null;
    this._Command = null;
    this._Parameters = null;
}

//
// accessor is datumnode_com_start_start_ip_radius_Change_PasswordRequest.prototype.getId
// element get for Id
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - optional element
//
// element set for Id
// setter function is is datumnode_com_start_start_ip_radius_Change_PasswordRequest.prototype.setId
//
function datumnode_com_start_start_ip_radius_Change_PasswordRequest_getId() { return this._Id;}

datumnode_com_start_start_ip_radius_Change_PasswordRequest.prototype.getId = datumnode_com_start_start_ip_radius_Change_PasswordRequest_getId;

function datumnode_com_start_start_ip_radius_Change_PasswordRequest_setId(value) { this._Id = value;}

datumnode_com_start_start_ip_radius_Change_PasswordRequest.prototype.setId = datumnode_com_start_start_ip_radius_Change_PasswordRequest_setId;
//
// accessor is datumnode_com_start_start_ip_radius_Change_PasswordRequest.prototype.getConnection
// element get for Connection
// - element type is {DatumNode}MetaConnection
// - optional element
//
// element set for Connection
// setter function is is datumnode_com_start_start_ip_radius_Change_PasswordRequest.prototype.setConnection
//
function datumnode_com_start_start_ip_radius_Change_PasswordRequest_getConnection() { return this._Connection;}

datumnode_com_start_start_ip_radius_Change_PasswordRequest.prototype.getConnection = datumnode_com_start_start_ip_radius_Change_PasswordRequest_getConnection;

function datumnode_com_start_start_ip_radius_Change_PasswordRequest_setConnection(value) { this._Connection = value;}

datumnode_com_start_start_ip_radius_Change_PasswordRequest.prototype.setConnection = datumnode_com_start_start_ip_radius_Change_PasswordRequest_setConnection;
//
// accessor is datumnode_com_start_start_ip_radius_Change_PasswordRequest.prototype.getCommand
// element get for Command
// - element type is {DatumNode}MetaCommand
// - optional element
//
// element set for Command
// setter function is is datumnode_com_start_start_ip_radius_Change_PasswordRequest.prototype.setCommand
//
function datumnode_com_start_start_ip_radius_Change_PasswordRequest_getCommand() { return this._Command;}

datumnode_com_start_start_ip_radius_Change_PasswordRequest.prototype.getCommand = datumnode_com_start_start_ip_radius_Change_PasswordRequest_getCommand;

function datumnode_com_start_start_ip_radius_Change_PasswordRequest_setCommand(value) { this._Command = value;}

datumnode_com_start_start_ip_radius_Change_PasswordRequest.prototype.setCommand = datumnode_com_start_start_ip_radius_Change_PasswordRequest_setCommand;
//
// accessor is datumnode_com_start_start_ip_radius_Change_PasswordRequest.prototype.getParameters
// element get for Parameters
// - element type is {http://datumnode.com/start/start_ip/radius}Change_PasswordInputParameters
// - optional element
//
// element set for Parameters
// setter function is is datumnode_com_start_start_ip_radius_Change_PasswordRequest.prototype.setParameters
//
function datumnode_com_start_start_ip_radius_Change_PasswordRequest_getParameters() { return this._Parameters;}

datumnode_com_start_start_ip_radius_Change_PasswordRequest.prototype.getParameters = datumnode_com_start_start_ip_radius_Change_PasswordRequest_getParameters;

function datumnode_com_start_start_ip_radius_Change_PasswordRequest_setParameters(value) { this._Parameters = value;}

datumnode_com_start_start_ip_radius_Change_PasswordRequest.prototype.setParameters = datumnode_com_start_start_ip_radius_Change_PasswordRequest_setParameters;
//
// Serialize {http://datumnode.com/start/start_ip/radius}Change_PasswordRequest
//
function datumnode_com_start_start_ip_radius_Change_PasswordRequest_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'DatumNode\' xmlns:jns1=\'http://datumnode.com/start/start_ip/radius\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._Id != null) {
      xml = xml + '<jns1:Id>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._Id);
      xml = xml + '</jns1:Id>';
     }
    }
    // block for local variables
    {
     if (this._Connection != null) {
      xml = xml + this._Connection.serialize(cxfjsutils, 'jns0:Connection', null);
     }
    }
    // block for local variables
    {
     if (this._Command != null) {
      xml = xml + this._Command.serialize(cxfjsutils, 'jns0:Command', null);
     }
    }
    // block for local variables
    {
     if (this._Parameters != null) {
      xml = xml + this._Parameters.serialize(cxfjsutils, 'jns1:Parameters', null);
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

datumnode_com_start_start_ip_radius_Change_PasswordRequest.prototype.serialize = datumnode_com_start_start_ip_radius_Change_PasswordRequest_serialize;

function datumnode_com_start_start_ip_radius_Change_PasswordRequest_deserialize (cxfjsutils, element) {
    var newobject = new datumnode_com_start_start_ip_radius_Change_PasswordRequest();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Id');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'Id')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = parseInt(value);
     }
     newobject.setId(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Connection');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'DatumNode', 'Connection')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = DN_MetaConnection_deserialize(cxfjsutils, curElement);
     }
     newobject.setConnection(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Command');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'DatumNode', 'Command')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = DN_MetaCommand_deserialize(cxfjsutils, curElement);
     }
     newobject.setCommand(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Parameters');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'Parameters')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = datumnode_com_start_start_ip_radius_Change_PasswordInputParameters_deserialize(cxfjsutils, curElement);
     }
     newobject.setParameters(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://datumnode.com/start/start_ip/radius}Check_ProfileResult
//
function datumnode_com_start_start_ip_radius_Check_ProfileResult () {
    this.typeMarker = 'datumnode_com_start_start_ip_radius_Check_ProfileResult';
    this._Result = null;
    this._Parameters = null;
}

//
// accessor is datumnode_com_start_start_ip_radius_Check_ProfileResult.prototype.getResult
// element get for Result
// - element type is {DatumNode}DbResult
// - optional element
//
// element set for Result
// setter function is is datumnode_com_start_start_ip_radius_Check_ProfileResult.prototype.setResult
//
function datumnode_com_start_start_ip_radius_Check_ProfileResult_getResult() { return this._Result;}

datumnode_com_start_start_ip_radius_Check_ProfileResult.prototype.getResult = datumnode_com_start_start_ip_radius_Check_ProfileResult_getResult;

function datumnode_com_start_start_ip_radius_Check_ProfileResult_setResult(value) { this._Result = value;}

datumnode_com_start_start_ip_radius_Check_ProfileResult.prototype.setResult = datumnode_com_start_start_ip_radius_Check_ProfileResult_setResult;
//
// accessor is datumnode_com_start_start_ip_radius_Check_ProfileResult.prototype.getParameters
// element get for Parameters
// - element type is {http://datumnode.com/start/start_ip/radius}Check_ProfileOutputParameters
// - optional element
//
// element set for Parameters
// setter function is is datumnode_com_start_start_ip_radius_Check_ProfileResult.prototype.setParameters
//
function datumnode_com_start_start_ip_radius_Check_ProfileResult_getParameters() { return this._Parameters;}

datumnode_com_start_start_ip_radius_Check_ProfileResult.prototype.getParameters = datumnode_com_start_start_ip_radius_Check_ProfileResult_getParameters;

function datumnode_com_start_start_ip_radius_Check_ProfileResult_setParameters(value) { this._Parameters = value;}

datumnode_com_start_start_ip_radius_Check_ProfileResult.prototype.setParameters = datumnode_com_start_start_ip_radius_Check_ProfileResult_setParameters;
//
// Serialize {http://datumnode.com/start/start_ip/radius}Check_ProfileResult
//
function datumnode_com_start_start_ip_radius_Check_ProfileResult_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'DatumNode\' xmlns:jns1=\'http://datumnode.com/start/start_ip/radius\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._Result != null) {
      xml = xml + this._Result.serialize(cxfjsutils, 'jns0:Result', null);
     }
    }
    // block for local variables
    {
     if (this._Parameters != null) {
      xml = xml + this._Parameters.serialize(cxfjsutils, 'jns1:Parameters', null);
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

datumnode_com_start_start_ip_radius_Check_ProfileResult.prototype.serialize = datumnode_com_start_start_ip_radius_Check_ProfileResult_serialize;

function datumnode_com_start_start_ip_radius_Check_ProfileResult_deserialize (cxfjsutils, element) {
    var newobject = new datumnode_com_start_start_ip_radius_Check_ProfileResult();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Result');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'DatumNode', 'Result')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = DN_DbResult_deserialize(cxfjsutils, curElement);
     }
     newobject.setResult(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Parameters');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'Parameters')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = datumnode_com_start_start_ip_radius_Check_ProfileOutputParameters_deserialize(cxfjsutils, curElement);
     }
     newobject.setParameters(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://datumnode.com/start/start_ip/radius}Get_Dev_LoginRequest
//
function datumnode_com_start_start_ip_radius_Get_Dev_LoginRequest () {
    this.typeMarker = 'datumnode_com_start_start_ip_radius_Get_Dev_LoginRequest';
    this._Id = null;
    this._Connection = null;
    this._Command = null;
    this._Parameters = null;
}

//
// accessor is datumnode_com_start_start_ip_radius_Get_Dev_LoginRequest.prototype.getId
// element get for Id
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - optional element
//
// element set for Id
// setter function is is datumnode_com_start_start_ip_radius_Get_Dev_LoginRequest.prototype.setId
//
function datumnode_com_start_start_ip_radius_Get_Dev_LoginRequest_getId() { return this._Id;}

datumnode_com_start_start_ip_radius_Get_Dev_LoginRequest.prototype.getId = datumnode_com_start_start_ip_radius_Get_Dev_LoginRequest_getId;

function datumnode_com_start_start_ip_radius_Get_Dev_LoginRequest_setId(value) { this._Id = value;}

datumnode_com_start_start_ip_radius_Get_Dev_LoginRequest.prototype.setId = datumnode_com_start_start_ip_radius_Get_Dev_LoginRequest_setId;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Dev_LoginRequest.prototype.getConnection
// element get for Connection
// - element type is {DatumNode}MetaConnection
// - optional element
//
// element set for Connection
// setter function is is datumnode_com_start_start_ip_radius_Get_Dev_LoginRequest.prototype.setConnection
//
function datumnode_com_start_start_ip_radius_Get_Dev_LoginRequest_getConnection() { return this._Connection;}

datumnode_com_start_start_ip_radius_Get_Dev_LoginRequest.prototype.getConnection = datumnode_com_start_start_ip_radius_Get_Dev_LoginRequest_getConnection;

function datumnode_com_start_start_ip_radius_Get_Dev_LoginRequest_setConnection(value) { this._Connection = value;}

datumnode_com_start_start_ip_radius_Get_Dev_LoginRequest.prototype.setConnection = datumnode_com_start_start_ip_radius_Get_Dev_LoginRequest_setConnection;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Dev_LoginRequest.prototype.getCommand
// element get for Command
// - element type is {DatumNode}MetaCommand
// - optional element
//
// element set for Command
// setter function is is datumnode_com_start_start_ip_radius_Get_Dev_LoginRequest.prototype.setCommand
//
function datumnode_com_start_start_ip_radius_Get_Dev_LoginRequest_getCommand() { return this._Command;}

datumnode_com_start_start_ip_radius_Get_Dev_LoginRequest.prototype.getCommand = datumnode_com_start_start_ip_radius_Get_Dev_LoginRequest_getCommand;

function datumnode_com_start_start_ip_radius_Get_Dev_LoginRequest_setCommand(value) { this._Command = value;}

datumnode_com_start_start_ip_radius_Get_Dev_LoginRequest.prototype.setCommand = datumnode_com_start_start_ip_radius_Get_Dev_LoginRequest_setCommand;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Dev_LoginRequest.prototype.getParameters
// element get for Parameters
// - element type is {http://datumnode.com/start/start_ip/radius}Get_Dev_LoginInputParameters
// - optional element
//
// element set for Parameters
// setter function is is datumnode_com_start_start_ip_radius_Get_Dev_LoginRequest.prototype.setParameters
//
function datumnode_com_start_start_ip_radius_Get_Dev_LoginRequest_getParameters() { return this._Parameters;}

datumnode_com_start_start_ip_radius_Get_Dev_LoginRequest.prototype.getParameters = datumnode_com_start_start_ip_radius_Get_Dev_LoginRequest_getParameters;

function datumnode_com_start_start_ip_radius_Get_Dev_LoginRequest_setParameters(value) { this._Parameters = value;}

datumnode_com_start_start_ip_radius_Get_Dev_LoginRequest.prototype.setParameters = datumnode_com_start_start_ip_radius_Get_Dev_LoginRequest_setParameters;
//
// Serialize {http://datumnode.com/start/start_ip/radius}Get_Dev_LoginRequest
//
function datumnode_com_start_start_ip_radius_Get_Dev_LoginRequest_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'DatumNode\' xmlns:jns1=\'http://datumnode.com/start/start_ip/radius\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._Id != null) {
      xml = xml + '<jns1:Id>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._Id);
      xml = xml + '</jns1:Id>';
     }
    }
    // block for local variables
    {
     if (this._Connection != null) {
      xml = xml + this._Connection.serialize(cxfjsutils, 'jns0:Connection', null);
     }
    }
    // block for local variables
    {
     if (this._Command != null) {
      xml = xml + this._Command.serialize(cxfjsutils, 'jns0:Command', null);
     }
    }
    // block for local variables
    {
     if (this._Parameters != null) {
      xml = xml + this._Parameters.serialize(cxfjsutils, 'jns1:Parameters', null);
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

datumnode_com_start_start_ip_radius_Get_Dev_LoginRequest.prototype.serialize = datumnode_com_start_start_ip_radius_Get_Dev_LoginRequest_serialize;

function datumnode_com_start_start_ip_radius_Get_Dev_LoginRequest_deserialize (cxfjsutils, element) {
    var newobject = new datumnode_com_start_start_ip_radius_Get_Dev_LoginRequest();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Id');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'Id')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = parseInt(value);
     }
     newobject.setId(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Connection');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'DatumNode', 'Connection')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = DN_MetaConnection_deserialize(cxfjsutils, curElement);
     }
     newobject.setConnection(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Command');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'DatumNode', 'Command')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = DN_MetaCommand_deserialize(cxfjsutils, curElement);
     }
     newobject.setCommand(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Parameters');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'Parameters')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = datumnode_com_start_start_ip_radius_Get_Dev_LoginInputParameters_deserialize(cxfjsutils, curElement);
     }
     newobject.setParameters(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://datumnode.com/start/start_ip/radius}Stop_Radius_SessionResult
//
function datumnode_com_start_start_ip_radius_Stop_Radius_SessionResult () {
    this.typeMarker = 'datumnode_com_start_start_ip_radius_Stop_Radius_SessionResult';
    this._Result = null;
    this._Parameters = null;
}

//
// accessor is datumnode_com_start_start_ip_radius_Stop_Radius_SessionResult.prototype.getResult
// element get for Result
// - element type is {DatumNode}DbResult
// - optional element
//
// element set for Result
// setter function is is datumnode_com_start_start_ip_radius_Stop_Radius_SessionResult.prototype.setResult
//
function datumnode_com_start_start_ip_radius_Stop_Radius_SessionResult_getResult() { return this._Result;}

datumnode_com_start_start_ip_radius_Stop_Radius_SessionResult.prototype.getResult = datumnode_com_start_start_ip_radius_Stop_Radius_SessionResult_getResult;

function datumnode_com_start_start_ip_radius_Stop_Radius_SessionResult_setResult(value) { this._Result = value;}

datumnode_com_start_start_ip_radius_Stop_Radius_SessionResult.prototype.setResult = datumnode_com_start_start_ip_radius_Stop_Radius_SessionResult_setResult;
//
// accessor is datumnode_com_start_start_ip_radius_Stop_Radius_SessionResult.prototype.getParameters
// element get for Parameters
// - element type is {http://datumnode.com/start/start_ip/radius}Stop_Radius_SessionOutputParameters
// - optional element
//
// element set for Parameters
// setter function is is datumnode_com_start_start_ip_radius_Stop_Radius_SessionResult.prototype.setParameters
//
function datumnode_com_start_start_ip_radius_Stop_Radius_SessionResult_getParameters() { return this._Parameters;}

datumnode_com_start_start_ip_radius_Stop_Radius_SessionResult.prototype.getParameters = datumnode_com_start_start_ip_radius_Stop_Radius_SessionResult_getParameters;

function datumnode_com_start_start_ip_radius_Stop_Radius_SessionResult_setParameters(value) { this._Parameters = value;}

datumnode_com_start_start_ip_radius_Stop_Radius_SessionResult.prototype.setParameters = datumnode_com_start_start_ip_radius_Stop_Radius_SessionResult_setParameters;
//
// Serialize {http://datumnode.com/start/start_ip/radius}Stop_Radius_SessionResult
//
function datumnode_com_start_start_ip_radius_Stop_Radius_SessionResult_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'DatumNode\' xmlns:jns1=\'http://datumnode.com/start/start_ip/radius\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._Result != null) {
      xml = xml + this._Result.serialize(cxfjsutils, 'jns0:Result', null);
     }
    }
    // block for local variables
    {
     if (this._Parameters != null) {
      xml = xml + this._Parameters.serialize(cxfjsutils, 'jns1:Parameters', null);
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

datumnode_com_start_start_ip_radius_Stop_Radius_SessionResult.prototype.serialize = datumnode_com_start_start_ip_radius_Stop_Radius_SessionResult_serialize;

function datumnode_com_start_start_ip_radius_Stop_Radius_SessionResult_deserialize (cxfjsutils, element) {
    var newobject = new datumnode_com_start_start_ip_radius_Stop_Radius_SessionResult();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Result');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'DatumNode', 'Result')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = DN_DbResult_deserialize(cxfjsutils, curElement);
     }
     newobject.setResult(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Parameters');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'Parameters')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = datumnode_com_start_start_ip_radius_Stop_Radius_SessionOutputParameters_deserialize(cxfjsutils, curElement);
     }
     newobject.setParameters(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://datumnode.com/start/start_ip/radius}Get_Traffic_by_LoginRequest
//
function datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginRequest () {
    this.typeMarker = 'datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginRequest';
    this._Id = null;
    this._Connection = null;
    this._Command = null;
    this._Parameters = null;
}

//
// accessor is datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginRequest.prototype.getId
// element get for Id
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - optional element
//
// element set for Id
// setter function is is datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginRequest.prototype.setId
//
function datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginRequest_getId() { return this._Id;}

datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginRequest.prototype.getId = datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginRequest_getId;

function datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginRequest_setId(value) { this._Id = value;}

datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginRequest.prototype.setId = datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginRequest_setId;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginRequest.prototype.getConnection
// element get for Connection
// - element type is {DatumNode}MetaConnection
// - optional element
//
// element set for Connection
// setter function is is datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginRequest.prototype.setConnection
//
function datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginRequest_getConnection() { return this._Connection;}

datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginRequest.prototype.getConnection = datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginRequest_getConnection;

function datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginRequest_setConnection(value) { this._Connection = value;}

datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginRequest.prototype.setConnection = datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginRequest_setConnection;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginRequest.prototype.getCommand
// element get for Command
// - element type is {DatumNode}MetaCommand
// - optional element
//
// element set for Command
// setter function is is datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginRequest.prototype.setCommand
//
function datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginRequest_getCommand() { return this._Command;}

datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginRequest.prototype.getCommand = datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginRequest_getCommand;

function datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginRequest_setCommand(value) { this._Command = value;}

datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginRequest.prototype.setCommand = datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginRequest_setCommand;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginRequest.prototype.getParameters
// element get for Parameters
// - element type is {http://datumnode.com/start/start_ip/radius}Get_Traffic_by_LoginInputParameters
// - optional element
//
// element set for Parameters
// setter function is is datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginRequest.prototype.setParameters
//
function datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginRequest_getParameters() { return this._Parameters;}

datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginRequest.prototype.getParameters = datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginRequest_getParameters;

function datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginRequest_setParameters(value) { this._Parameters = value;}

datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginRequest.prototype.setParameters = datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginRequest_setParameters;
//
// Serialize {http://datumnode.com/start/start_ip/radius}Get_Traffic_by_LoginRequest
//
function datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginRequest_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'DatumNode\' xmlns:jns1=\'http://datumnode.com/start/start_ip/radius\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._Id != null) {
      xml = xml + '<jns1:Id>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._Id);
      xml = xml + '</jns1:Id>';
     }
    }
    // block for local variables
    {
     if (this._Connection != null) {
      xml = xml + this._Connection.serialize(cxfjsutils, 'jns0:Connection', null);
     }
    }
    // block for local variables
    {
     if (this._Command != null) {
      xml = xml + this._Command.serialize(cxfjsutils, 'jns0:Command', null);
     }
    }
    // block for local variables
    {
     if (this._Parameters != null) {
      xml = xml + this._Parameters.serialize(cxfjsutils, 'jns1:Parameters', null);
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginRequest.prototype.serialize = datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginRequest_serialize;

function datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginRequest_deserialize (cxfjsutils, element) {
    var newobject = new datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginRequest();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Id');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'Id')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = parseInt(value);
     }
     newobject.setId(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Connection');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'DatumNode', 'Connection')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = DN_MetaConnection_deserialize(cxfjsutils, curElement);
     }
     newobject.setConnection(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Command');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'DatumNode', 'Command')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = DN_MetaCommand_deserialize(cxfjsutils, curElement);
     }
     newobject.setCommand(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Parameters');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'Parameters')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginInputParameters_deserialize(cxfjsutils, curElement);
     }
     newobject.setParameters(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://datumnode.com/start/start_ip/radius}Get_Access_by_LoginEntity
//
function datumnode_com_start_start_ip_radius_Get_Access_by_LoginEntity () {
    this.typeMarker = 'datumnode_com_start_start_ip_radius_Get_Access_by_LoginEntity';
    this._status = null;
    this._zone_date = null;
    this._sys_date = null;
    this._nas_ip = null;
    this._nas_name = null;
    this._nas_zone = null;
    this._login = null;
    this._mac_addr = null;
    this._nas_port_id = null;
    this._tfp_code = null;
    this._tfp_name = null;
    this._err_code = null;
    this._err_string = null;
}

//
// accessor is datumnode_com_start_start_ip_radius_Get_Access_by_LoginEntity.prototype.getStatus
// element get for status
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for status
// setter function is is datumnode_com_start_start_ip_radius_Get_Access_by_LoginEntity.prototype.setStatus
//
function datumnode_com_start_start_ip_radius_Get_Access_by_LoginEntity_getStatus() { return this._status;}

datumnode_com_start_start_ip_radius_Get_Access_by_LoginEntity.prototype.getStatus = datumnode_com_start_start_ip_radius_Get_Access_by_LoginEntity_getStatus;

function datumnode_com_start_start_ip_radius_Get_Access_by_LoginEntity_setStatus(value) { this._status = value;}

datumnode_com_start_start_ip_radius_Get_Access_by_LoginEntity.prototype.setStatus = datumnode_com_start_start_ip_radius_Get_Access_by_LoginEntity_setStatus;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Access_by_LoginEntity.prototype.getZone_date
// element get for zone_date
// - element type is {http://www.w3.org/2001/XMLSchema}dateTime
// - required element
// - nillable
//
// element set for zone_date
// setter function is is datumnode_com_start_start_ip_radius_Get_Access_by_LoginEntity.prototype.setZone_date
//
function datumnode_com_start_start_ip_radius_Get_Access_by_LoginEntity_getZone_date() { return this._zone_date;}

datumnode_com_start_start_ip_radius_Get_Access_by_LoginEntity.prototype.getZone_date = datumnode_com_start_start_ip_radius_Get_Access_by_LoginEntity_getZone_date;

function datumnode_com_start_start_ip_radius_Get_Access_by_LoginEntity_setZone_date(value) { this._zone_date = value;}

datumnode_com_start_start_ip_radius_Get_Access_by_LoginEntity.prototype.setZone_date = datumnode_com_start_start_ip_radius_Get_Access_by_LoginEntity_setZone_date;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Access_by_LoginEntity.prototype.getSys_date
// element get for sys_date
// - element type is {http://www.w3.org/2001/XMLSchema}dateTime
// - required element
// - nillable
//
// element set for sys_date
// setter function is is datumnode_com_start_start_ip_radius_Get_Access_by_LoginEntity.prototype.setSys_date
//
function datumnode_com_start_start_ip_radius_Get_Access_by_LoginEntity_getSys_date() { return this._sys_date;}

datumnode_com_start_start_ip_radius_Get_Access_by_LoginEntity.prototype.getSys_date = datumnode_com_start_start_ip_radius_Get_Access_by_LoginEntity_getSys_date;

function datumnode_com_start_start_ip_radius_Get_Access_by_LoginEntity_setSys_date(value) { this._sys_date = value;}

datumnode_com_start_start_ip_radius_Get_Access_by_LoginEntity.prototype.setSys_date = datumnode_com_start_start_ip_radius_Get_Access_by_LoginEntity_setSys_date;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Access_by_LoginEntity.prototype.getNas_ip
// element get for nas_ip
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for nas_ip
// setter function is is datumnode_com_start_start_ip_radius_Get_Access_by_LoginEntity.prototype.setNas_ip
//
function datumnode_com_start_start_ip_radius_Get_Access_by_LoginEntity_getNas_ip() { return this._nas_ip;}

datumnode_com_start_start_ip_radius_Get_Access_by_LoginEntity.prototype.getNas_ip = datumnode_com_start_start_ip_radius_Get_Access_by_LoginEntity_getNas_ip;

function datumnode_com_start_start_ip_radius_Get_Access_by_LoginEntity_setNas_ip(value) { this._nas_ip = value;}

datumnode_com_start_start_ip_radius_Get_Access_by_LoginEntity.prototype.setNas_ip = datumnode_com_start_start_ip_radius_Get_Access_by_LoginEntity_setNas_ip;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Access_by_LoginEntity.prototype.getNas_name
// element get for nas_name
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for nas_name
// setter function is is datumnode_com_start_start_ip_radius_Get_Access_by_LoginEntity.prototype.setNas_name
//
function datumnode_com_start_start_ip_radius_Get_Access_by_LoginEntity_getNas_name() { return this._nas_name;}

datumnode_com_start_start_ip_radius_Get_Access_by_LoginEntity.prototype.getNas_name = datumnode_com_start_start_ip_radius_Get_Access_by_LoginEntity_getNas_name;

function datumnode_com_start_start_ip_radius_Get_Access_by_LoginEntity_setNas_name(value) { this._nas_name = value;}

datumnode_com_start_start_ip_radius_Get_Access_by_LoginEntity.prototype.setNas_name = datumnode_com_start_start_ip_radius_Get_Access_by_LoginEntity_setNas_name;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Access_by_LoginEntity.prototype.getNas_zone
// element get for nas_zone
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for nas_zone
// setter function is is datumnode_com_start_start_ip_radius_Get_Access_by_LoginEntity.prototype.setNas_zone
//
function datumnode_com_start_start_ip_radius_Get_Access_by_LoginEntity_getNas_zone() { return this._nas_zone;}

datumnode_com_start_start_ip_radius_Get_Access_by_LoginEntity.prototype.getNas_zone = datumnode_com_start_start_ip_radius_Get_Access_by_LoginEntity_getNas_zone;

function datumnode_com_start_start_ip_radius_Get_Access_by_LoginEntity_setNas_zone(value) { this._nas_zone = value;}

datumnode_com_start_start_ip_radius_Get_Access_by_LoginEntity.prototype.setNas_zone = datumnode_com_start_start_ip_radius_Get_Access_by_LoginEntity_setNas_zone;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Access_by_LoginEntity.prototype.getLogin
// element get for login
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for login
// setter function is is datumnode_com_start_start_ip_radius_Get_Access_by_LoginEntity.prototype.setLogin
//
function datumnode_com_start_start_ip_radius_Get_Access_by_LoginEntity_getLogin() { return this._login;}

datumnode_com_start_start_ip_radius_Get_Access_by_LoginEntity.prototype.getLogin = datumnode_com_start_start_ip_radius_Get_Access_by_LoginEntity_getLogin;

function datumnode_com_start_start_ip_radius_Get_Access_by_LoginEntity_setLogin(value) { this._login = value;}

datumnode_com_start_start_ip_radius_Get_Access_by_LoginEntity.prototype.setLogin = datumnode_com_start_start_ip_radius_Get_Access_by_LoginEntity_setLogin;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Access_by_LoginEntity.prototype.getMac_addr
// element get for mac_addr
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for mac_addr
// setter function is is datumnode_com_start_start_ip_radius_Get_Access_by_LoginEntity.prototype.setMac_addr
//
function datumnode_com_start_start_ip_radius_Get_Access_by_LoginEntity_getMac_addr() { return this._mac_addr;}

datumnode_com_start_start_ip_radius_Get_Access_by_LoginEntity.prototype.getMac_addr = datumnode_com_start_start_ip_radius_Get_Access_by_LoginEntity_getMac_addr;

function datumnode_com_start_start_ip_radius_Get_Access_by_LoginEntity_setMac_addr(value) { this._mac_addr = value;}

datumnode_com_start_start_ip_radius_Get_Access_by_LoginEntity.prototype.setMac_addr = datumnode_com_start_start_ip_radius_Get_Access_by_LoginEntity_setMac_addr;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Access_by_LoginEntity.prototype.getNas_port_id
// element get for nas_port_id
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for nas_port_id
// setter function is is datumnode_com_start_start_ip_radius_Get_Access_by_LoginEntity.prototype.setNas_port_id
//
function datumnode_com_start_start_ip_radius_Get_Access_by_LoginEntity_getNas_port_id() { return this._nas_port_id;}

datumnode_com_start_start_ip_radius_Get_Access_by_LoginEntity.prototype.getNas_port_id = datumnode_com_start_start_ip_radius_Get_Access_by_LoginEntity_getNas_port_id;

function datumnode_com_start_start_ip_radius_Get_Access_by_LoginEntity_setNas_port_id(value) { this._nas_port_id = value;}

datumnode_com_start_start_ip_radius_Get_Access_by_LoginEntity.prototype.setNas_port_id = datumnode_com_start_start_ip_radius_Get_Access_by_LoginEntity_setNas_port_id;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Access_by_LoginEntity.prototype.getTfp_code
// element get for tfp_code
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for tfp_code
// setter function is is datumnode_com_start_start_ip_radius_Get_Access_by_LoginEntity.prototype.setTfp_code
//
function datumnode_com_start_start_ip_radius_Get_Access_by_LoginEntity_getTfp_code() { return this._tfp_code;}

datumnode_com_start_start_ip_radius_Get_Access_by_LoginEntity.prototype.getTfp_code = datumnode_com_start_start_ip_radius_Get_Access_by_LoginEntity_getTfp_code;

function datumnode_com_start_start_ip_radius_Get_Access_by_LoginEntity_setTfp_code(value) { this._tfp_code = value;}

datumnode_com_start_start_ip_radius_Get_Access_by_LoginEntity.prototype.setTfp_code = datumnode_com_start_start_ip_radius_Get_Access_by_LoginEntity_setTfp_code;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Access_by_LoginEntity.prototype.getTfp_name
// element get for tfp_name
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for tfp_name
// setter function is is datumnode_com_start_start_ip_radius_Get_Access_by_LoginEntity.prototype.setTfp_name
//
function datumnode_com_start_start_ip_radius_Get_Access_by_LoginEntity_getTfp_name() { return this._tfp_name;}

datumnode_com_start_start_ip_radius_Get_Access_by_LoginEntity.prototype.getTfp_name = datumnode_com_start_start_ip_radius_Get_Access_by_LoginEntity_getTfp_name;

function datumnode_com_start_start_ip_radius_Get_Access_by_LoginEntity_setTfp_name(value) { this._tfp_name = value;}

datumnode_com_start_start_ip_radius_Get_Access_by_LoginEntity.prototype.setTfp_name = datumnode_com_start_start_ip_radius_Get_Access_by_LoginEntity_setTfp_name;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Access_by_LoginEntity.prototype.getErr_code
// element get for err_code
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for err_code
// setter function is is datumnode_com_start_start_ip_radius_Get_Access_by_LoginEntity.prototype.setErr_code
//
function datumnode_com_start_start_ip_radius_Get_Access_by_LoginEntity_getErr_code() { return this._err_code;}

datumnode_com_start_start_ip_radius_Get_Access_by_LoginEntity.prototype.getErr_code = datumnode_com_start_start_ip_radius_Get_Access_by_LoginEntity_getErr_code;

function datumnode_com_start_start_ip_radius_Get_Access_by_LoginEntity_setErr_code(value) { this._err_code = value;}

datumnode_com_start_start_ip_radius_Get_Access_by_LoginEntity.prototype.setErr_code = datumnode_com_start_start_ip_radius_Get_Access_by_LoginEntity_setErr_code;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Access_by_LoginEntity.prototype.getErr_string
// element get for err_string
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for err_string
// setter function is is datumnode_com_start_start_ip_radius_Get_Access_by_LoginEntity.prototype.setErr_string
//
function datumnode_com_start_start_ip_radius_Get_Access_by_LoginEntity_getErr_string() { return this._err_string;}

datumnode_com_start_start_ip_radius_Get_Access_by_LoginEntity.prototype.getErr_string = datumnode_com_start_start_ip_radius_Get_Access_by_LoginEntity_getErr_string;

function datumnode_com_start_start_ip_radius_Get_Access_by_LoginEntity_setErr_string(value) { this._err_string = value;}

datumnode_com_start_start_ip_radius_Get_Access_by_LoginEntity.prototype.setErr_string = datumnode_com_start_start_ip_radius_Get_Access_by_LoginEntity_setErr_string;
//
// Serialize {http://datumnode.com/start/start_ip/radius}Get_Access_by_LoginEntity
//
function datumnode_com_start_start_ip_radius_Get_Access_by_LoginEntity_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'DatumNode\' xmlns:jns1=\'http://datumnode.com/start/start_ip/radius\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._status != null) {
      xml = xml + '<jns1:status>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._status);
      xml = xml + '</jns1:status>';
     }
    }
    // block for local variables
    {
     if (this._zone_date == null) {
      xml = xml + '<jns1:zone_date xsi:nil=\'true\'/>';
     } else {
      xml = xml + '<jns1:zone_date>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._zone_date);
      xml = xml + '</jns1:zone_date>';
     }
    }
    // block for local variables
    {
     if (this._sys_date == null) {
      xml = xml + '<jns1:sys_date xsi:nil=\'true\'/>';
     } else {
      xml = xml + '<jns1:sys_date>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._sys_date);
      xml = xml + '</jns1:sys_date>';
     }
    }
    // block for local variables
    {
     if (this._nas_ip != null) {
      xml = xml + '<jns1:nas_ip>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._nas_ip);
      xml = xml + '</jns1:nas_ip>';
     }
    }
    // block for local variables
    {
     if (this._nas_name != null) {
      xml = xml + '<jns1:nas_name>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._nas_name);
      xml = xml + '</jns1:nas_name>';
     }
    }
    // block for local variables
    {
     if (this._nas_zone != null) {
      xml = xml + '<jns1:nas_zone>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._nas_zone);
      xml = xml + '</jns1:nas_zone>';
     }
    }
    // block for local variables
    {
     if (this._login != null) {
      xml = xml + '<jns1:login>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._login);
      xml = xml + '</jns1:login>';
     }
    }
    // block for local variables
    {
     if (this._mac_addr != null) {
      xml = xml + '<jns1:mac_addr>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._mac_addr);
      xml = xml + '</jns1:mac_addr>';
     }
    }
    // block for local variables
    {
     if (this._nas_port_id != null) {
      xml = xml + '<jns1:nas_port_id>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._nas_port_id);
      xml = xml + '</jns1:nas_port_id>';
     }
    }
    // block for local variables
    {
     if (this._tfp_code != null) {
      xml = xml + '<jns1:tfp_code>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._tfp_code);
      xml = xml + '</jns1:tfp_code>';
     }
    }
    // block for local variables
    {
     if (this._tfp_name != null) {
      xml = xml + '<jns1:tfp_name>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._tfp_name);
      xml = xml + '</jns1:tfp_name>';
     }
    }
    // block for local variables
    {
     if (this._err_code != null) {
      xml = xml + '<jns1:err_code>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._err_code);
      xml = xml + '</jns1:err_code>';
     }
    }
    // block for local variables
    {
     if (this._err_string != null) {
      xml = xml + '<jns1:err_string>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._err_string);
      xml = xml + '</jns1:err_string>';
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

datumnode_com_start_start_ip_radius_Get_Access_by_LoginEntity.prototype.serialize = datumnode_com_start_start_ip_radius_Get_Access_by_LoginEntity_serialize;

function datumnode_com_start_start_ip_radius_Get_Access_by_LoginEntity_deserialize (cxfjsutils, element) {
    var newobject = new datumnode_com_start_start_ip_radius_Get_Access_by_LoginEntity();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing status');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'status')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setStatus(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing zone_date');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setZone_date(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing sys_date');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setSys_date(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing nas_ip');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'nas_ip')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setNas_ip(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing nas_name');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'nas_name')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setNas_name(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing nas_zone');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'nas_zone')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setNas_zone(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing login');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'login')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setLogin(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing mac_addr');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'mac_addr')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setMac_addr(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing nas_port_id');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'nas_port_id')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setNas_port_id(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing tfp_code');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'tfp_code')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setTfp_code(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing tfp_name');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'tfp_name')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setTfp_name(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing err_code');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'err_code')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setErr_code(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing err_string');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'err_string')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setErr_string(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://datumnode.com/start/start_ip/radius}Get_Access_by_LoginInputParameters
//
function datumnode_com_start_start_ip_radius_Get_Access_by_LoginInputParameters () {
    this.typeMarker = 'datumnode_com_start_start_ip_radius_Get_Access_by_LoginInputParameters';
    this._p_Filial = null;
    this._p_Date_Beg = null;
    this._p_Date_End = null;
    this._p_Login = null;
}

//
// accessor is datumnode_com_start_start_ip_radius_Get_Access_by_LoginInputParameters.prototype.getP_Filial
// element get for p_Filial
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for p_Filial
// setter function is is datumnode_com_start_start_ip_radius_Get_Access_by_LoginInputParameters.prototype.setP_Filial
//
function datumnode_com_start_start_ip_radius_Get_Access_by_LoginInputParameters_getP_Filial() { return this._p_Filial;}

datumnode_com_start_start_ip_radius_Get_Access_by_LoginInputParameters.prototype.getP_Filial = datumnode_com_start_start_ip_radius_Get_Access_by_LoginInputParameters_getP_Filial;

function datumnode_com_start_start_ip_radius_Get_Access_by_LoginInputParameters_setP_Filial(value) { this._p_Filial = value;}

datumnode_com_start_start_ip_radius_Get_Access_by_LoginInputParameters.prototype.setP_Filial = datumnode_com_start_start_ip_radius_Get_Access_by_LoginInputParameters_setP_Filial;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Access_by_LoginInputParameters.prototype.getP_Date_Beg
// element get for p_Date_Beg
// - element type is {http://www.w3.org/2001/XMLSchema}dateTime
// - required element
// - nillable
//
// element set for p_Date_Beg
// setter function is is datumnode_com_start_start_ip_radius_Get_Access_by_LoginInputParameters.prototype.setP_Date_Beg
//
function datumnode_com_start_start_ip_radius_Get_Access_by_LoginInputParameters_getP_Date_Beg() { return this._p_Date_Beg;}

datumnode_com_start_start_ip_radius_Get_Access_by_LoginInputParameters.prototype.getP_Date_Beg = datumnode_com_start_start_ip_radius_Get_Access_by_LoginInputParameters_getP_Date_Beg;

function datumnode_com_start_start_ip_radius_Get_Access_by_LoginInputParameters_setP_Date_Beg(value) { this._p_Date_Beg = value;}

datumnode_com_start_start_ip_radius_Get_Access_by_LoginInputParameters.prototype.setP_Date_Beg = datumnode_com_start_start_ip_radius_Get_Access_by_LoginInputParameters_setP_Date_Beg;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Access_by_LoginInputParameters.prototype.getP_Date_End
// element get for p_Date_End
// - element type is {http://www.w3.org/2001/XMLSchema}dateTime
// - required element
// - nillable
//
// element set for p_Date_End
// setter function is is datumnode_com_start_start_ip_radius_Get_Access_by_LoginInputParameters.prototype.setP_Date_End
//
function datumnode_com_start_start_ip_radius_Get_Access_by_LoginInputParameters_getP_Date_End() { return this._p_Date_End;}

datumnode_com_start_start_ip_radius_Get_Access_by_LoginInputParameters.prototype.getP_Date_End = datumnode_com_start_start_ip_radius_Get_Access_by_LoginInputParameters_getP_Date_End;

function datumnode_com_start_start_ip_radius_Get_Access_by_LoginInputParameters_setP_Date_End(value) { this._p_Date_End = value;}

datumnode_com_start_start_ip_radius_Get_Access_by_LoginInputParameters.prototype.setP_Date_End = datumnode_com_start_start_ip_radius_Get_Access_by_LoginInputParameters_setP_Date_End;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Access_by_LoginInputParameters.prototype.getP_Login
// element get for p_Login
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for p_Login
// setter function is is datumnode_com_start_start_ip_radius_Get_Access_by_LoginInputParameters.prototype.setP_Login
//
function datumnode_com_start_start_ip_radius_Get_Access_by_LoginInputParameters_getP_Login() { return this._p_Login;}

datumnode_com_start_start_ip_radius_Get_Access_by_LoginInputParameters.prototype.getP_Login = datumnode_com_start_start_ip_radius_Get_Access_by_LoginInputParameters_getP_Login;

function datumnode_com_start_start_ip_radius_Get_Access_by_LoginInputParameters_setP_Login(value) { this._p_Login = value;}

datumnode_com_start_start_ip_radius_Get_Access_by_LoginInputParameters.prototype.setP_Login = datumnode_com_start_start_ip_radius_Get_Access_by_LoginInputParameters_setP_Login;
//
// Serialize {http://datumnode.com/start/start_ip/radius}Get_Access_by_LoginInputParameters
//
function datumnode_com_start_start_ip_radius_Get_Access_by_LoginInputParameters_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'DatumNode\' xmlns:jns1=\'http://datumnode.com/start/start_ip/radius\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._p_Filial != null) {
      xml = xml + '<jns1:p_Filial>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._p_Filial);
      xml = xml + '</jns1:p_Filial>';
     }
    }
    // block for local variables
    {
     if (this._p_Date_Beg == null) {
      xml = xml + '<jns1:p_Date_Beg xsi:nil=\'true\'/>';
     } else {
      xml = xml + '<jns1:p_Date_Beg>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._p_Date_Beg);
      xml = xml + '</jns1:p_Date_Beg>';
     }
    }
    // block for local variables
    {
     if (this._p_Date_End == null) {
      xml = xml + '<jns1:p_Date_End xsi:nil=\'true\'/>';
     } else {
      xml = xml + '<jns1:p_Date_End>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._p_Date_End);
      xml = xml + '</jns1:p_Date_End>';
     }
    }
    // block for local variables
    {
     if (this._p_Login != null) {
      xml = xml + '<jns1:p_Login>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._p_Login);
      xml = xml + '</jns1:p_Login>';
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

datumnode_com_start_start_ip_radius_Get_Access_by_LoginInputParameters.prototype.serialize = datumnode_com_start_start_ip_radius_Get_Access_by_LoginInputParameters_serialize;

function datumnode_com_start_start_ip_radius_Get_Access_by_LoginInputParameters_deserialize (cxfjsutils, element) {
    var newobject = new datumnode_com_start_start_ip_radius_Get_Access_by_LoginInputParameters();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing p_Filial');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'p_Filial')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setP_Filial(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing p_Date_Beg');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setP_Date_Beg(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing p_Date_End');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setP_Date_End(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing p_Login');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'p_Login')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setP_Login(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://datumnode.com/start/start_ip/radius}Get_Sessions_by_Login_SysResult
//
function datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysResult () {
    this.typeMarker = 'datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysResult';
    this._Result = null;
    this._Parameters = null;
    this._ResultSet = null;
}

//
// accessor is datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysResult.prototype.getResult
// element get for Result
// - element type is {DatumNode}DbResult
// - optional element
//
// element set for Result
// setter function is is datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysResult.prototype.setResult
//
function datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysResult_getResult() { return this._Result;}

datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysResult.prototype.getResult = datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysResult_getResult;

function datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysResult_setResult(value) { this._Result = value;}

datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysResult.prototype.setResult = datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysResult_setResult;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysResult.prototype.getParameters
// element get for Parameters
// - element type is {http://datumnode.com/start/start_ip/radius}Get_Sessions_by_Login_SysOutputParameters
// - optional element
//
// element set for Parameters
// setter function is is datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysResult.prototype.setParameters
//
function datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysResult_getParameters() { return this._Parameters;}

datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysResult.prototype.getParameters = datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysResult_getParameters;

function datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysResult_setParameters(value) { this._Parameters = value;}

datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysResult.prototype.setParameters = datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysResult_setParameters;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysResult.prototype.getResultSet
// element get for ResultSet
// - element type is {http://datumnode.com/start/start_ip/radius}ArrayOfGet_Sessions_by_Login_SysEntity
// - optional element
//
// element set for ResultSet
// setter function is is datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysResult.prototype.setResultSet
//
function datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysResult_getResultSet() { return this._ResultSet;}

datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysResult.prototype.getResultSet = datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysResult_getResultSet;

function datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysResult_setResultSet(value) { this._ResultSet = value;}

datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysResult.prototype.setResultSet = datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysResult_setResultSet;
//
// Serialize {http://datumnode.com/start/start_ip/radius}Get_Sessions_by_Login_SysResult
//
function datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysResult_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'DatumNode\' xmlns:jns1=\'http://datumnode.com/start/start_ip/radius\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._Result != null) {
      xml = xml + this._Result.serialize(cxfjsutils, 'jns0:Result', null);
     }
    }
    // block for local variables
    {
     if (this._Parameters != null) {
      xml = xml + this._Parameters.serialize(cxfjsutils, 'jns1:Parameters', null);
     }
    }
    // block for local variables
    {
     if (this._ResultSet != null) {
      xml = xml + this._ResultSet.serialize(cxfjsutils, 'jns1:ResultSet', null);
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysResult.prototype.serialize = datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysResult_serialize;

function datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysResult_deserialize (cxfjsutils, element) {
    var newobject = new datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysResult();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Result');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'DatumNode', 'Result')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = DN_DbResult_deserialize(cxfjsutils, curElement);
     }
     newobject.setResult(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Parameters');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'Parameters')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysOutputParameters_deserialize(cxfjsutils, curElement);
     }
     newobject.setParameters(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing ResultSet');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'ResultSet')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = datumnode_com_start_start_ip_radius_ArrayOfGet_Sessions_by_Login_SysEntity_deserialize(cxfjsutils, curElement);
     }
     newobject.setResultSet(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://datumnode.com/start/start_ip/radius}Get_Srv_ListRequest
//
function datumnode_com_start_start_ip_radius_Get_Srv_ListRequest () {
    this.typeMarker = 'datumnode_com_start_start_ip_radius_Get_Srv_ListRequest';
    this._Id = null;
    this._Connection = null;
    this._Command = null;
    this._Parameters = null;
}

//
// accessor is datumnode_com_start_start_ip_radius_Get_Srv_ListRequest.prototype.getId
// element get for Id
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - optional element
//
// element set for Id
// setter function is is datumnode_com_start_start_ip_radius_Get_Srv_ListRequest.prototype.setId
//
function datumnode_com_start_start_ip_radius_Get_Srv_ListRequest_getId() { return this._Id;}

datumnode_com_start_start_ip_radius_Get_Srv_ListRequest.prototype.getId = datumnode_com_start_start_ip_radius_Get_Srv_ListRequest_getId;

function datumnode_com_start_start_ip_radius_Get_Srv_ListRequest_setId(value) { this._Id = value;}

datumnode_com_start_start_ip_radius_Get_Srv_ListRequest.prototype.setId = datumnode_com_start_start_ip_radius_Get_Srv_ListRequest_setId;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Srv_ListRequest.prototype.getConnection
// element get for Connection
// - element type is {DatumNode}MetaConnection
// - optional element
//
// element set for Connection
// setter function is is datumnode_com_start_start_ip_radius_Get_Srv_ListRequest.prototype.setConnection
//
function datumnode_com_start_start_ip_radius_Get_Srv_ListRequest_getConnection() { return this._Connection;}

datumnode_com_start_start_ip_radius_Get_Srv_ListRequest.prototype.getConnection = datumnode_com_start_start_ip_radius_Get_Srv_ListRequest_getConnection;

function datumnode_com_start_start_ip_radius_Get_Srv_ListRequest_setConnection(value) { this._Connection = value;}

datumnode_com_start_start_ip_radius_Get_Srv_ListRequest.prototype.setConnection = datumnode_com_start_start_ip_radius_Get_Srv_ListRequest_setConnection;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Srv_ListRequest.prototype.getCommand
// element get for Command
// - element type is {DatumNode}MetaCommand
// - optional element
//
// element set for Command
// setter function is is datumnode_com_start_start_ip_radius_Get_Srv_ListRequest.prototype.setCommand
//
function datumnode_com_start_start_ip_radius_Get_Srv_ListRequest_getCommand() { return this._Command;}

datumnode_com_start_start_ip_radius_Get_Srv_ListRequest.prototype.getCommand = datumnode_com_start_start_ip_radius_Get_Srv_ListRequest_getCommand;

function datumnode_com_start_start_ip_radius_Get_Srv_ListRequest_setCommand(value) { this._Command = value;}

datumnode_com_start_start_ip_radius_Get_Srv_ListRequest.prototype.setCommand = datumnode_com_start_start_ip_radius_Get_Srv_ListRequest_setCommand;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Srv_ListRequest.prototype.getParameters
// element get for Parameters
// - element type is {http://datumnode.com/start/start_ip/radius}Get_Srv_ListInputParameters
// - optional element
//
// element set for Parameters
// setter function is is datumnode_com_start_start_ip_radius_Get_Srv_ListRequest.prototype.setParameters
//
function datumnode_com_start_start_ip_radius_Get_Srv_ListRequest_getParameters() { return this._Parameters;}

datumnode_com_start_start_ip_radius_Get_Srv_ListRequest.prototype.getParameters = datumnode_com_start_start_ip_radius_Get_Srv_ListRequest_getParameters;

function datumnode_com_start_start_ip_radius_Get_Srv_ListRequest_setParameters(value) { this._Parameters = value;}

datumnode_com_start_start_ip_radius_Get_Srv_ListRequest.prototype.setParameters = datumnode_com_start_start_ip_radius_Get_Srv_ListRequest_setParameters;
//
// Serialize {http://datumnode.com/start/start_ip/radius}Get_Srv_ListRequest
//
function datumnode_com_start_start_ip_radius_Get_Srv_ListRequest_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'DatumNode\' xmlns:jns1=\'http://datumnode.com/start/start_ip/radius\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._Id != null) {
      xml = xml + '<jns1:Id>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._Id);
      xml = xml + '</jns1:Id>';
     }
    }
    // block for local variables
    {
     if (this._Connection != null) {
      xml = xml + this._Connection.serialize(cxfjsutils, 'jns0:Connection', null);
     }
    }
    // block for local variables
    {
     if (this._Command != null) {
      xml = xml + this._Command.serialize(cxfjsutils, 'jns0:Command', null);
     }
    }
    // block for local variables
    {
     if (this._Parameters != null) {
      xml = xml + this._Parameters.serialize(cxfjsutils, 'jns1:Parameters', null);
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

datumnode_com_start_start_ip_radius_Get_Srv_ListRequest.prototype.serialize = datumnode_com_start_start_ip_radius_Get_Srv_ListRequest_serialize;

function datumnode_com_start_start_ip_radius_Get_Srv_ListRequest_deserialize (cxfjsutils, element) {
    var newobject = new datumnode_com_start_start_ip_radius_Get_Srv_ListRequest();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Id');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'Id')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = parseInt(value);
     }
     newobject.setId(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Connection');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'DatumNode', 'Connection')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = DN_MetaConnection_deserialize(cxfjsutils, curElement);
     }
     newobject.setConnection(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Command');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'DatumNode', 'Command')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = DN_MetaCommand_deserialize(cxfjsutils, curElement);
     }
     newobject.setCommand(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Parameters');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'Parameters')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = datumnode_com_start_start_ip_radius_Get_Srv_ListInputParameters_deserialize(cxfjsutils, curElement);
     }
     newobject.setParameters(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://datumnode.com/start/start_ip/radius}ArrayOfGet_Traffic_by_LoginEntity
//
function datumnode_com_start_start_ip_radius_ArrayOfGet_Traffic_by_LoginEntity () {
    this.typeMarker = 'datumnode_com_start_start_ip_radius_ArrayOfGet_Traffic_by_LoginEntity';
    this._Get_Traffic_by_LoginEntity = [];
}

//
// accessor is datumnode_com_start_start_ip_radius_ArrayOfGet_Traffic_by_LoginEntity.prototype.getGet_Traffic_by_LoginEntity
// element get for Get_Traffic_by_LoginEntity
// - element type is {http://datumnode.com/start/start_ip/radius}Get_Traffic_by_LoginEntity
// - required element
// - array
// - nillable
//
// element set for Get_Traffic_by_LoginEntity
// setter function is is datumnode_com_start_start_ip_radius_ArrayOfGet_Traffic_by_LoginEntity.prototype.setGet_Traffic_by_LoginEntity
//
function datumnode_com_start_start_ip_radius_ArrayOfGet_Traffic_by_LoginEntity_getGet_Traffic_by_LoginEntity() { return this._Get_Traffic_by_LoginEntity;}

datumnode_com_start_start_ip_radius_ArrayOfGet_Traffic_by_LoginEntity.prototype.getGet_Traffic_by_LoginEntity = datumnode_com_start_start_ip_radius_ArrayOfGet_Traffic_by_LoginEntity_getGet_Traffic_by_LoginEntity;

function datumnode_com_start_start_ip_radius_ArrayOfGet_Traffic_by_LoginEntity_setGet_Traffic_by_LoginEntity(value) { this._Get_Traffic_by_LoginEntity = value;}

datumnode_com_start_start_ip_radius_ArrayOfGet_Traffic_by_LoginEntity.prototype.setGet_Traffic_by_LoginEntity = datumnode_com_start_start_ip_radius_ArrayOfGet_Traffic_by_LoginEntity_setGet_Traffic_by_LoginEntity;
//
// Serialize {http://datumnode.com/start/start_ip/radius}ArrayOfGet_Traffic_by_LoginEntity
//
function datumnode_com_start_start_ip_radius_ArrayOfGet_Traffic_by_LoginEntity_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'DatumNode\' xmlns:jns1=\'http://datumnode.com/start/start_ip/radius\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._Get_Traffic_by_LoginEntity != null) {
      for (var ax = 0;ax < this._Get_Traffic_by_LoginEntity.length;ax ++) {
       if (this._Get_Traffic_by_LoginEntity[ax] == null) {
        xml = xml + '<jns1:Get_Traffic_by_LoginEntity xsi:nil=\'true\'/>';
       } else {
        xml = xml + this._Get_Traffic_by_LoginEntity[ax].serialize(cxfjsutils, 'jns1:Get_Traffic_by_LoginEntity', null);
       }
      }
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

datumnode_com_start_start_ip_radius_ArrayOfGet_Traffic_by_LoginEntity.prototype.serialize = datumnode_com_start_start_ip_radius_ArrayOfGet_Traffic_by_LoginEntity_serialize;

function datumnode_com_start_start_ip_radius_ArrayOfGet_Traffic_by_LoginEntity_deserialize (cxfjsutils, element) {
    var newobject = new datumnode_com_start_start_ip_radius_ArrayOfGet_Traffic_by_LoginEntity();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Get_Traffic_by_LoginEntity');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'Get_Traffic_by_LoginEntity')) {
     item = [];
     do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       arrayItem = datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginEntity_deserialize(cxfjsutils, curElement);
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'Get_Traffic_by_LoginEntity'));
     newobject.setGet_Traffic_by_LoginEntity(item);
     var item = null;
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://datumnode.com/start/start_ip/radius}Get_Srv_ListEntity
//
function datumnode_com_start_start_ip_radius_Get_Srv_ListEntity () {
    this.typeMarker = 'datumnode_com_start_start_ip_radius_Get_Srv_ListEntity';
    this._code_value = null;
}

//
// accessor is datumnode_com_start_start_ip_radius_Get_Srv_ListEntity.prototype.getCode_value
// element get for code_value
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for code_value
// setter function is is datumnode_com_start_start_ip_radius_Get_Srv_ListEntity.prototype.setCode_value
//
function datumnode_com_start_start_ip_radius_Get_Srv_ListEntity_getCode_value() { return this._code_value;}

datumnode_com_start_start_ip_radius_Get_Srv_ListEntity.prototype.getCode_value = datumnode_com_start_start_ip_radius_Get_Srv_ListEntity_getCode_value;

function datumnode_com_start_start_ip_radius_Get_Srv_ListEntity_setCode_value(value) { this._code_value = value;}

datumnode_com_start_start_ip_radius_Get_Srv_ListEntity.prototype.setCode_value = datumnode_com_start_start_ip_radius_Get_Srv_ListEntity_setCode_value;
//
// Serialize {http://datumnode.com/start/start_ip/radius}Get_Srv_ListEntity
//
function datumnode_com_start_start_ip_radius_Get_Srv_ListEntity_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'DatumNode\' xmlns:jns1=\'http://datumnode.com/start/start_ip/radius\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._code_value != null) {
      xml = xml + '<jns1:code_value>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._code_value);
      xml = xml + '</jns1:code_value>';
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

datumnode_com_start_start_ip_radius_Get_Srv_ListEntity.prototype.serialize = datumnode_com_start_start_ip_radius_Get_Srv_ListEntity_serialize;

function datumnode_com_start_start_ip_radius_Get_Srv_ListEntity_deserialize (cxfjsutils, element) {
    var newobject = new datumnode_com_start_start_ip_radius_Get_Srv_ListEntity();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing code_value');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'code_value')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setCode_value(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://datumnode.com/start/start_ip/radius}Get_Access_SysdateOutputParameters
//
function datumnode_com_start_start_ip_radius_Get_Access_SysdateOutputParameters () {
    this.typeMarker = 'datumnode_com_start_start_ip_radius_Get_Access_SysdateOutputParameters';
}

//
// Serialize {http://datumnode.com/start/start_ip/radius}Get_Access_SysdateOutputParameters
//
function datumnode_com_start_start_ip_radius_Get_Access_SysdateOutputParameters_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'DatumNode\' xmlns:jns1=\'http://datumnode.com/start/start_ip/radius\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

datumnode_com_start_start_ip_radius_Get_Access_SysdateOutputParameters.prototype.serialize = datumnode_com_start_start_ip_radius_Get_Access_SysdateOutputParameters_serialize;

function datumnode_com_start_start_ip_radius_Get_Access_SysdateOutputParameters_deserialize (cxfjsutils, element) {
    var newobject = new datumnode_com_start_start_ip_radius_Get_Access_SysdateOutputParameters();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    return newobject;
}

//
// Constructor for XML Schema item {http://datumnode.com/start/start_ip/radius}ArrayOfGet_Dev_LoginEntity
//
function datumnode_com_start_start_ip_radius_ArrayOfGet_Dev_LoginEntity () {
    this.typeMarker = 'datumnode_com_start_start_ip_radius_ArrayOfGet_Dev_LoginEntity';
    this._Get_Dev_LoginEntity = [];
}

//
// accessor is datumnode_com_start_start_ip_radius_ArrayOfGet_Dev_LoginEntity.prototype.getGet_Dev_LoginEntity
// element get for Get_Dev_LoginEntity
// - element type is {http://datumnode.com/start/start_ip/radius}Get_Dev_LoginEntity
// - required element
// - array
// - nillable
//
// element set for Get_Dev_LoginEntity
// setter function is is datumnode_com_start_start_ip_radius_ArrayOfGet_Dev_LoginEntity.prototype.setGet_Dev_LoginEntity
//
function datumnode_com_start_start_ip_radius_ArrayOfGet_Dev_LoginEntity_getGet_Dev_LoginEntity() { return this._Get_Dev_LoginEntity;}

datumnode_com_start_start_ip_radius_ArrayOfGet_Dev_LoginEntity.prototype.getGet_Dev_LoginEntity = datumnode_com_start_start_ip_radius_ArrayOfGet_Dev_LoginEntity_getGet_Dev_LoginEntity;

function datumnode_com_start_start_ip_radius_ArrayOfGet_Dev_LoginEntity_setGet_Dev_LoginEntity(value) { this._Get_Dev_LoginEntity = value;}

datumnode_com_start_start_ip_radius_ArrayOfGet_Dev_LoginEntity.prototype.setGet_Dev_LoginEntity = datumnode_com_start_start_ip_radius_ArrayOfGet_Dev_LoginEntity_setGet_Dev_LoginEntity;
//
// Serialize {http://datumnode.com/start/start_ip/radius}ArrayOfGet_Dev_LoginEntity
//
function datumnode_com_start_start_ip_radius_ArrayOfGet_Dev_LoginEntity_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'DatumNode\' xmlns:jns1=\'http://datumnode.com/start/start_ip/radius\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._Get_Dev_LoginEntity != null) {
      for (var ax = 0;ax < this._Get_Dev_LoginEntity.length;ax ++) {
       if (this._Get_Dev_LoginEntity[ax] == null) {
        xml = xml + '<jns1:Get_Dev_LoginEntity xsi:nil=\'true\'/>';
       } else {
        xml = xml + this._Get_Dev_LoginEntity[ax].serialize(cxfjsutils, 'jns1:Get_Dev_LoginEntity', null);
       }
      }
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

datumnode_com_start_start_ip_radius_ArrayOfGet_Dev_LoginEntity.prototype.serialize = datumnode_com_start_start_ip_radius_ArrayOfGet_Dev_LoginEntity_serialize;

function datumnode_com_start_start_ip_radius_ArrayOfGet_Dev_LoginEntity_deserialize (cxfjsutils, element) {
    var newobject = new datumnode_com_start_start_ip_radius_ArrayOfGet_Dev_LoginEntity();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Get_Dev_LoginEntity');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'Get_Dev_LoginEntity')) {
     item = [];
     do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       arrayItem = datumnode_com_start_start_ip_radius_Get_Dev_LoginEntity_deserialize(cxfjsutils, curElement);
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'Get_Dev_LoginEntity'));
     newobject.setGet_Dev_LoginEntity(item);
     var item = null;
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://datumnode.com/start/start_ip/radius}Get_Dev_LoginOutputParameters
//
function datumnode_com_start_start_ip_radius_Get_Dev_LoginOutputParameters () {
    this.typeMarker = 'datumnode_com_start_start_ip_radius_Get_Dev_LoginOutputParameters';
}

//
// Serialize {http://datumnode.com/start/start_ip/radius}Get_Dev_LoginOutputParameters
//
function datumnode_com_start_start_ip_radius_Get_Dev_LoginOutputParameters_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'DatumNode\' xmlns:jns1=\'http://datumnode.com/start/start_ip/radius\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

datumnode_com_start_start_ip_radius_Get_Dev_LoginOutputParameters.prototype.serialize = datumnode_com_start_start_ip_radius_Get_Dev_LoginOutputParameters_serialize;

function datumnode_com_start_start_ip_radius_Get_Dev_LoginOutputParameters_deserialize (cxfjsutils, element) {
    var newobject = new datumnode_com_start_start_ip_radius_Get_Dev_LoginOutputParameters();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    return newobject;
}

//
// Constructor for XML Schema item {http://datumnode.com/start/start_ip/radius}Get_Sessions_by_Login_SysOutputParameters
//
function datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysOutputParameters () {
    this.typeMarker = 'datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysOutputParameters';
}

//
// Serialize {http://datumnode.com/start/start_ip/radius}Get_Sessions_by_Login_SysOutputParameters
//
function datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysOutputParameters_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'DatumNode\' xmlns:jns1=\'http://datumnode.com/start/start_ip/radius\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysOutputParameters.prototype.serialize = datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysOutputParameters_serialize;

function datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysOutputParameters_deserialize (cxfjsutils, element) {
    var newobject = new datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysOutputParameters();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    return newobject;
}

//
// Constructor for XML Schema item {http://datumnode.com/start/start_ip/radius}Get_Dev_LoginResult
//
function datumnode_com_start_start_ip_radius_Get_Dev_LoginResult () {
    this.typeMarker = 'datumnode_com_start_start_ip_radius_Get_Dev_LoginResult';
    this._Result = null;
    this._Parameters = null;
    this._ResultSet = null;
}

//
// accessor is datumnode_com_start_start_ip_radius_Get_Dev_LoginResult.prototype.getResult
// element get for Result
// - element type is {DatumNode}DbResult
// - optional element
//
// element set for Result
// setter function is is datumnode_com_start_start_ip_radius_Get_Dev_LoginResult.prototype.setResult
//
function datumnode_com_start_start_ip_radius_Get_Dev_LoginResult_getResult() { return this._Result;}

datumnode_com_start_start_ip_radius_Get_Dev_LoginResult.prototype.getResult = datumnode_com_start_start_ip_radius_Get_Dev_LoginResult_getResult;

function datumnode_com_start_start_ip_radius_Get_Dev_LoginResult_setResult(value) { this._Result = value;}

datumnode_com_start_start_ip_radius_Get_Dev_LoginResult.prototype.setResult = datumnode_com_start_start_ip_radius_Get_Dev_LoginResult_setResult;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Dev_LoginResult.prototype.getParameters
// element get for Parameters
// - element type is {http://datumnode.com/start/start_ip/radius}Get_Dev_LoginOutputParameters
// - optional element
//
// element set for Parameters
// setter function is is datumnode_com_start_start_ip_radius_Get_Dev_LoginResult.prototype.setParameters
//
function datumnode_com_start_start_ip_radius_Get_Dev_LoginResult_getParameters() { return this._Parameters;}

datumnode_com_start_start_ip_radius_Get_Dev_LoginResult.prototype.getParameters = datumnode_com_start_start_ip_radius_Get_Dev_LoginResult_getParameters;

function datumnode_com_start_start_ip_radius_Get_Dev_LoginResult_setParameters(value) { this._Parameters = value;}

datumnode_com_start_start_ip_radius_Get_Dev_LoginResult.prototype.setParameters = datumnode_com_start_start_ip_radius_Get_Dev_LoginResult_setParameters;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Dev_LoginResult.prototype.getResultSet
// element get for ResultSet
// - element type is {http://datumnode.com/start/start_ip/radius}ArrayOfGet_Dev_LoginEntity
// - optional element
//
// element set for ResultSet
// setter function is is datumnode_com_start_start_ip_radius_Get_Dev_LoginResult.prototype.setResultSet
//
function datumnode_com_start_start_ip_radius_Get_Dev_LoginResult_getResultSet() { return this._ResultSet;}

datumnode_com_start_start_ip_radius_Get_Dev_LoginResult.prototype.getResultSet = datumnode_com_start_start_ip_radius_Get_Dev_LoginResult_getResultSet;

function datumnode_com_start_start_ip_radius_Get_Dev_LoginResult_setResultSet(value) { this._ResultSet = value;}

datumnode_com_start_start_ip_radius_Get_Dev_LoginResult.prototype.setResultSet = datumnode_com_start_start_ip_radius_Get_Dev_LoginResult_setResultSet;
//
// Serialize {http://datumnode.com/start/start_ip/radius}Get_Dev_LoginResult
//
function datumnode_com_start_start_ip_radius_Get_Dev_LoginResult_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'DatumNode\' xmlns:jns1=\'http://datumnode.com/start/start_ip/radius\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._Result != null) {
      xml = xml + this._Result.serialize(cxfjsutils, 'jns0:Result', null);
     }
    }
    // block for local variables
    {
     if (this._Parameters != null) {
      xml = xml + this._Parameters.serialize(cxfjsutils, 'jns1:Parameters', null);
     }
    }
    // block for local variables
    {
     if (this._ResultSet != null) {
      xml = xml + this._ResultSet.serialize(cxfjsutils, 'jns1:ResultSet', null);
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

datumnode_com_start_start_ip_radius_Get_Dev_LoginResult.prototype.serialize = datumnode_com_start_start_ip_radius_Get_Dev_LoginResult_serialize;

function datumnode_com_start_start_ip_radius_Get_Dev_LoginResult_deserialize (cxfjsutils, element) {
    var newobject = new datumnode_com_start_start_ip_radius_Get_Dev_LoginResult();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Result');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'DatumNode', 'Result')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = DN_DbResult_deserialize(cxfjsutils, curElement);
     }
     newobject.setResult(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Parameters');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'Parameters')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = datumnode_com_start_start_ip_radius_Get_Dev_LoginOutputParameters_deserialize(cxfjsutils, curElement);
     }
     newobject.setParameters(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing ResultSet');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'ResultSet')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = datumnode_com_start_start_ip_radius_ArrayOfGet_Dev_LoginEntity_deserialize(cxfjsutils, curElement);
     }
     newobject.setResultSet(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://datumnode.com/start/start_ip/radius}Get_Access_by_Login_SysRequest
//
function datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysRequest () {
    this.typeMarker = 'datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysRequest';
    this._Id = null;
    this._Connection = null;
    this._Command = null;
    this._Parameters = null;
}

//
// accessor is datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysRequest.prototype.getId
// element get for Id
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - optional element
//
// element set for Id
// setter function is is datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysRequest.prototype.setId
//
function datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysRequest_getId() { return this._Id;}

datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysRequest.prototype.getId = datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysRequest_getId;

function datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysRequest_setId(value) { this._Id = value;}

datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysRequest.prototype.setId = datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysRequest_setId;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysRequest.prototype.getConnection
// element get for Connection
// - element type is {DatumNode}MetaConnection
// - optional element
//
// element set for Connection
// setter function is is datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysRequest.prototype.setConnection
//
function datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysRequest_getConnection() { return this._Connection;}

datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysRequest.prototype.getConnection = datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysRequest_getConnection;

function datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysRequest_setConnection(value) { this._Connection = value;}

datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysRequest.prototype.setConnection = datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysRequest_setConnection;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysRequest.prototype.getCommand
// element get for Command
// - element type is {DatumNode}MetaCommand
// - optional element
//
// element set for Command
// setter function is is datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysRequest.prototype.setCommand
//
function datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysRequest_getCommand() { return this._Command;}

datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysRequest.prototype.getCommand = datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysRequest_getCommand;

function datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysRequest_setCommand(value) { this._Command = value;}

datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysRequest.prototype.setCommand = datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysRequest_setCommand;
//
// accessor is datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysRequest.prototype.getParameters
// element get for Parameters
// - element type is {http://datumnode.com/start/start_ip/radius}Get_Access_by_Login_SysInputParameters
// - optional element
//
// element set for Parameters
// setter function is is datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysRequest.prototype.setParameters
//
function datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysRequest_getParameters() { return this._Parameters;}

datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysRequest.prototype.getParameters = datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysRequest_getParameters;

function datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysRequest_setParameters(value) { this._Parameters = value;}

datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysRequest.prototype.setParameters = datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysRequest_setParameters;
//
// Serialize {http://datumnode.com/start/start_ip/radius}Get_Access_by_Login_SysRequest
//
function datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysRequest_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'DatumNode\' xmlns:jns1=\'http://datumnode.com/start/start_ip/radius\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._Id != null) {
      xml = xml + '<jns1:Id>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._Id);
      xml = xml + '</jns1:Id>';
     }
    }
    // block for local variables
    {
     if (this._Connection != null) {
      xml = xml + this._Connection.serialize(cxfjsutils, 'jns0:Connection', null);
     }
    }
    // block for local variables
    {
     if (this._Command != null) {
      xml = xml + this._Command.serialize(cxfjsutils, 'jns0:Command', null);
     }
    }
    // block for local variables
    {
     if (this._Parameters != null) {
      xml = xml + this._Parameters.serialize(cxfjsutils, 'jns1:Parameters', null);
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysRequest.prototype.serialize = datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysRequest_serialize;

function datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysRequest_deserialize (cxfjsutils, element) {
    var newobject = new datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysRequest();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Id');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'Id')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = parseInt(value);
     }
     newobject.setId(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Connection');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'DatumNode', 'Connection')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = DN_MetaConnection_deserialize(cxfjsutils, curElement);
     }
     newobject.setConnection(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Command');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'DatumNode', 'Command')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = DN_MetaCommand_deserialize(cxfjsutils, curElement);
     }
     newobject.setCommand(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Parameters');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'Parameters')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysInputParameters_deserialize(cxfjsutils, curElement);
     }
     newobject.setParameters(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://datumnode.com/start/start_ip/radius}Get_Access_Sysdate
//
function datumnode_com_start_start_ip_radius_Get_Access_Sysdate () {
    this.typeMarker = 'datumnode_com_start_start_ip_radius_Get_Access_Sysdate';
    this._request = null;
}

//
// accessor is datumnode_com_start_start_ip_radius_Get_Access_Sysdate.prototype.getRequest
// element get for request
// - element type is {http://datumnode.com/start/start_ip/radius}Get_Access_SysdateRequest
// - optional element
//
// element set for request
// setter function is is datumnode_com_start_start_ip_radius_Get_Access_Sysdate.prototype.setRequest
//
function datumnode_com_start_start_ip_radius_Get_Access_Sysdate_getRequest() { return this._request;}

datumnode_com_start_start_ip_radius_Get_Access_Sysdate.prototype.getRequest = datumnode_com_start_start_ip_radius_Get_Access_Sysdate_getRequest;

function datumnode_com_start_start_ip_radius_Get_Access_Sysdate_setRequest(value) { this._request = value;}

datumnode_com_start_start_ip_radius_Get_Access_Sysdate.prototype.setRequest = datumnode_com_start_start_ip_radius_Get_Access_Sysdate_setRequest;
//
// Serialize {http://datumnode.com/start/start_ip/radius}Get_Access_Sysdate
//
function datumnode_com_start_start_ip_radius_Get_Access_Sysdate_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'DatumNode\' xmlns:jns1=\'http://datumnode.com/start/start_ip/radius\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._request != null) {
      xml = xml + this._request.serialize(cxfjsutils, 'jns1:request', null);
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

datumnode_com_start_start_ip_radius_Get_Access_Sysdate.prototype.serialize = datumnode_com_start_start_ip_radius_Get_Access_Sysdate_serialize;

function datumnode_com_start_start_ip_radius_Get_Access_Sysdate_deserialize (cxfjsutils, element) {
    var newobject = new datumnode_com_start_start_ip_radius_Get_Access_Sysdate();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing request');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'request')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = datumnode_com_start_start_ip_radius_Get_Access_SysdateRequest_deserialize(cxfjsutils, curElement);
     }
     newobject.setRequest(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://datumnode.com/start/start_ip/radius}Get_Dev_LoginResponse
//
function datumnode_com_start_start_ip_radius_Get_Dev_LoginResponse () {
    this.typeMarker = 'datumnode_com_start_start_ip_radius_Get_Dev_LoginResponse';
    this._Get_Dev_LoginResult = null;
}

//
// accessor is datumnode_com_start_start_ip_radius_Get_Dev_LoginResponse.prototype.getGet_Dev_LoginResult
// element get for Get_Dev_LoginResult
// - element type is {http://datumnode.com/start/start_ip/radius}Get_Dev_LoginResult
// - optional element
//
// element set for Get_Dev_LoginResult
// setter function is is datumnode_com_start_start_ip_radius_Get_Dev_LoginResponse.prototype.setGet_Dev_LoginResult
//
function datumnode_com_start_start_ip_radius_Get_Dev_LoginResponse_getGet_Dev_LoginResult() { return this._Get_Dev_LoginResult;}

datumnode_com_start_start_ip_radius_Get_Dev_LoginResponse.prototype.getGet_Dev_LoginResult = datumnode_com_start_start_ip_radius_Get_Dev_LoginResponse_getGet_Dev_LoginResult;

function datumnode_com_start_start_ip_radius_Get_Dev_LoginResponse_setGet_Dev_LoginResult(value) { this._Get_Dev_LoginResult = value;}

datumnode_com_start_start_ip_radius_Get_Dev_LoginResponse.prototype.setGet_Dev_LoginResult = datumnode_com_start_start_ip_radius_Get_Dev_LoginResponse_setGet_Dev_LoginResult;
//
// Serialize {http://datumnode.com/start/start_ip/radius}Get_Dev_LoginResponse
//
function datumnode_com_start_start_ip_radius_Get_Dev_LoginResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'DatumNode\' xmlns:jns1=\'http://datumnode.com/start/start_ip/radius\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._Get_Dev_LoginResult != null) {
      xml = xml + this._Get_Dev_LoginResult.serialize(cxfjsutils, 'jns1:Get_Dev_LoginResult', null);
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

datumnode_com_start_start_ip_radius_Get_Dev_LoginResponse.prototype.serialize = datumnode_com_start_start_ip_radius_Get_Dev_LoginResponse_serialize;

function datumnode_com_start_start_ip_radius_Get_Dev_LoginResponse_deserialize (cxfjsutils, element) {
    var newobject = new datumnode_com_start_start_ip_radius_Get_Dev_LoginResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Get_Dev_LoginResult');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'Get_Dev_LoginResult')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = datumnode_com_start_start_ip_radius_Get_Dev_LoginResult_deserialize(cxfjsutils, curElement);
     }
     newobject.setGet_Dev_LoginResult(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://datumnode.com/start/start_ip/radius}Get_Access_by_Login_Sys
//
function datumnode_com_start_start_ip_radius_Get_Access_by_Login_Sys () {
    this.typeMarker = 'datumnode_com_start_start_ip_radius_Get_Access_by_Login_Sys';
    this._request = null;
}

//
// accessor is datumnode_com_start_start_ip_radius_Get_Access_by_Login_Sys.prototype.getRequest
// element get for request
// - element type is {http://datumnode.com/start/start_ip/radius}Get_Access_by_Login_SysRequest
// - optional element
//
// element set for request
// setter function is is datumnode_com_start_start_ip_radius_Get_Access_by_Login_Sys.prototype.setRequest
//
function datumnode_com_start_start_ip_radius_Get_Access_by_Login_Sys_getRequest() { return this._request;}

datumnode_com_start_start_ip_radius_Get_Access_by_Login_Sys.prototype.getRequest = datumnode_com_start_start_ip_radius_Get_Access_by_Login_Sys_getRequest;

function datumnode_com_start_start_ip_radius_Get_Access_by_Login_Sys_setRequest(value) { this._request = value;}

datumnode_com_start_start_ip_radius_Get_Access_by_Login_Sys.prototype.setRequest = datumnode_com_start_start_ip_radius_Get_Access_by_Login_Sys_setRequest;
//
// Serialize {http://datumnode.com/start/start_ip/radius}Get_Access_by_Login_Sys
//
function datumnode_com_start_start_ip_radius_Get_Access_by_Login_Sys_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'DatumNode\' xmlns:jns1=\'http://datumnode.com/start/start_ip/radius\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._request != null) {
      xml = xml + this._request.serialize(cxfjsutils, 'jns1:request', null);
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

datumnode_com_start_start_ip_radius_Get_Access_by_Login_Sys.prototype.serialize = datumnode_com_start_start_ip_radius_Get_Access_by_Login_Sys_serialize;

function datumnode_com_start_start_ip_radius_Get_Access_by_Login_Sys_deserialize (cxfjsutils, element) {
    var newobject = new datumnode_com_start_start_ip_radius_Get_Access_by_Login_Sys();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing request');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'request')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysRequest_deserialize(cxfjsutils, curElement);
     }
     newobject.setRequest(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://datumnode.com/start/start_ip/radius}Check_ProfileResponse
//
function datumnode_com_start_start_ip_radius_Check_ProfileResponse () {
    this.typeMarker = 'datumnode_com_start_start_ip_radius_Check_ProfileResponse';
    this._Check_ProfileResult = null;
}

//
// accessor is datumnode_com_start_start_ip_radius_Check_ProfileResponse.prototype.getCheck_ProfileResult
// element get for Check_ProfileResult
// - element type is {http://datumnode.com/start/start_ip/radius}Check_ProfileResult
// - optional element
//
// element set for Check_ProfileResult
// setter function is is datumnode_com_start_start_ip_radius_Check_ProfileResponse.prototype.setCheck_ProfileResult
//
function datumnode_com_start_start_ip_radius_Check_ProfileResponse_getCheck_ProfileResult() { return this._Check_ProfileResult;}

datumnode_com_start_start_ip_radius_Check_ProfileResponse.prototype.getCheck_ProfileResult = datumnode_com_start_start_ip_radius_Check_ProfileResponse_getCheck_ProfileResult;

function datumnode_com_start_start_ip_radius_Check_ProfileResponse_setCheck_ProfileResult(value) { this._Check_ProfileResult = value;}

datumnode_com_start_start_ip_radius_Check_ProfileResponse.prototype.setCheck_ProfileResult = datumnode_com_start_start_ip_radius_Check_ProfileResponse_setCheck_ProfileResult;
//
// Serialize {http://datumnode.com/start/start_ip/radius}Check_ProfileResponse
//
function datumnode_com_start_start_ip_radius_Check_ProfileResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'DatumNode\' xmlns:jns1=\'http://datumnode.com/start/start_ip/radius\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._Check_ProfileResult != null) {
      xml = xml + this._Check_ProfileResult.serialize(cxfjsutils, 'jns1:Check_ProfileResult', null);
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

datumnode_com_start_start_ip_radius_Check_ProfileResponse.prototype.serialize = datumnode_com_start_start_ip_radius_Check_ProfileResponse_serialize;

function datumnode_com_start_start_ip_radius_Check_ProfileResponse_deserialize (cxfjsutils, element) {
    var newobject = new datumnode_com_start_start_ip_radius_Check_ProfileResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Check_ProfileResult');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'Check_ProfileResult')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = datumnode_com_start_start_ip_radius_Check_ProfileResult_deserialize(cxfjsutils, curElement);
     }
     newobject.setCheck_ProfileResult(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://datumnode.com/start/start_ip/radius}Stop_Radius_SessionResponse
//
function datumnode_com_start_start_ip_radius_Stop_Radius_SessionResponse () {
    this.typeMarker = 'datumnode_com_start_start_ip_radius_Stop_Radius_SessionResponse';
    this._Stop_Radius_SessionResult = null;
}

//
// accessor is datumnode_com_start_start_ip_radius_Stop_Radius_SessionResponse.prototype.getStop_Radius_SessionResult
// element get for Stop_Radius_SessionResult
// - element type is {http://datumnode.com/start/start_ip/radius}Stop_Radius_SessionResult
// - optional element
//
// element set for Stop_Radius_SessionResult
// setter function is is datumnode_com_start_start_ip_radius_Stop_Radius_SessionResponse.prototype.setStop_Radius_SessionResult
//
function datumnode_com_start_start_ip_radius_Stop_Radius_SessionResponse_getStop_Radius_SessionResult() { return this._Stop_Radius_SessionResult;}

datumnode_com_start_start_ip_radius_Stop_Radius_SessionResponse.prototype.getStop_Radius_SessionResult = datumnode_com_start_start_ip_radius_Stop_Radius_SessionResponse_getStop_Radius_SessionResult;

function datumnode_com_start_start_ip_radius_Stop_Radius_SessionResponse_setStop_Radius_SessionResult(value) { this._Stop_Radius_SessionResult = value;}

datumnode_com_start_start_ip_radius_Stop_Radius_SessionResponse.prototype.setStop_Radius_SessionResult = datumnode_com_start_start_ip_radius_Stop_Radius_SessionResponse_setStop_Radius_SessionResult;
//
// Serialize {http://datumnode.com/start/start_ip/radius}Stop_Radius_SessionResponse
//
function datumnode_com_start_start_ip_radius_Stop_Radius_SessionResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'DatumNode\' xmlns:jns1=\'http://datumnode.com/start/start_ip/radius\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._Stop_Radius_SessionResult != null) {
      xml = xml + this._Stop_Radius_SessionResult.serialize(cxfjsutils, 'jns1:Stop_Radius_SessionResult', null);
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

datumnode_com_start_start_ip_radius_Stop_Radius_SessionResponse.prototype.serialize = datumnode_com_start_start_ip_radius_Stop_Radius_SessionResponse_serialize;

function datumnode_com_start_start_ip_radius_Stop_Radius_SessionResponse_deserialize (cxfjsutils, element) {
    var newobject = new datumnode_com_start_start_ip_radius_Stop_Radius_SessionResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Stop_Radius_SessionResult');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'Stop_Radius_SessionResult')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = datumnode_com_start_start_ip_radius_Stop_Radius_SessionResult_deserialize(cxfjsutils, curElement);
     }
     newobject.setStop_Radius_SessionResult(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://datumnode.com/start/start_ip/radius}Get_Traffic_by_Login
//
function datumnode_com_start_start_ip_radius_Get_Traffic_by_Login () {
    this.typeMarker = 'datumnode_com_start_start_ip_radius_Get_Traffic_by_Login';
    this._request = null;
}

//
// accessor is datumnode_com_start_start_ip_radius_Get_Traffic_by_Login.prototype.getRequest
// element get for request
// - element type is {http://datumnode.com/start/start_ip/radius}Get_Traffic_by_LoginRequest
// - optional element
//
// element set for request
// setter function is is datumnode_com_start_start_ip_radius_Get_Traffic_by_Login.prototype.setRequest
//
function datumnode_com_start_start_ip_radius_Get_Traffic_by_Login_getRequest() { return this._request;}

datumnode_com_start_start_ip_radius_Get_Traffic_by_Login.prototype.getRequest = datumnode_com_start_start_ip_radius_Get_Traffic_by_Login_getRequest;

function datumnode_com_start_start_ip_radius_Get_Traffic_by_Login_setRequest(value) { this._request = value;}

datumnode_com_start_start_ip_radius_Get_Traffic_by_Login.prototype.setRequest = datumnode_com_start_start_ip_radius_Get_Traffic_by_Login_setRequest;
//
// Serialize {http://datumnode.com/start/start_ip/radius}Get_Traffic_by_Login
//
function datumnode_com_start_start_ip_radius_Get_Traffic_by_Login_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'DatumNode\' xmlns:jns1=\'http://datumnode.com/start/start_ip/radius\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._request != null) {
      xml = xml + this._request.serialize(cxfjsutils, 'jns1:request', null);
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

datumnode_com_start_start_ip_radius_Get_Traffic_by_Login.prototype.serialize = datumnode_com_start_start_ip_radius_Get_Traffic_by_Login_serialize;

function datumnode_com_start_start_ip_radius_Get_Traffic_by_Login_deserialize (cxfjsutils, element) {
    var newobject = new datumnode_com_start_start_ip_radius_Get_Traffic_by_Login();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing request');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'request')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginRequest_deserialize(cxfjsutils, curElement);
     }
     newobject.setRequest(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://datumnode.com/start/start_ip/radius}Get_Srv_ListResponse
//
function datumnode_com_start_start_ip_radius_Get_Srv_ListResponse () {
    this.typeMarker = 'datumnode_com_start_start_ip_radius_Get_Srv_ListResponse';
    this._Get_Srv_ListResult = null;
}

//
// accessor is datumnode_com_start_start_ip_radius_Get_Srv_ListResponse.prototype.getGet_Srv_ListResult
// element get for Get_Srv_ListResult
// - element type is {http://datumnode.com/start/start_ip/radius}Get_Srv_ListResult
// - optional element
//
// element set for Get_Srv_ListResult
// setter function is is datumnode_com_start_start_ip_radius_Get_Srv_ListResponse.prototype.setGet_Srv_ListResult
//
function datumnode_com_start_start_ip_radius_Get_Srv_ListResponse_getGet_Srv_ListResult() { return this._Get_Srv_ListResult;}

datumnode_com_start_start_ip_radius_Get_Srv_ListResponse.prototype.getGet_Srv_ListResult = datumnode_com_start_start_ip_radius_Get_Srv_ListResponse_getGet_Srv_ListResult;

function datumnode_com_start_start_ip_radius_Get_Srv_ListResponse_setGet_Srv_ListResult(value) { this._Get_Srv_ListResult = value;}

datumnode_com_start_start_ip_radius_Get_Srv_ListResponse.prototype.setGet_Srv_ListResult = datumnode_com_start_start_ip_radius_Get_Srv_ListResponse_setGet_Srv_ListResult;
//
// Serialize {http://datumnode.com/start/start_ip/radius}Get_Srv_ListResponse
//
function datumnode_com_start_start_ip_radius_Get_Srv_ListResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'DatumNode\' xmlns:jns1=\'http://datumnode.com/start/start_ip/radius\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._Get_Srv_ListResult != null) {
      xml = xml + this._Get_Srv_ListResult.serialize(cxfjsutils, 'jns1:Get_Srv_ListResult', null);
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

datumnode_com_start_start_ip_radius_Get_Srv_ListResponse.prototype.serialize = datumnode_com_start_start_ip_radius_Get_Srv_ListResponse_serialize;

function datumnode_com_start_start_ip_radius_Get_Srv_ListResponse_deserialize (cxfjsutils, element) {
    var newobject = new datumnode_com_start_start_ip_radius_Get_Srv_ListResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Get_Srv_ListResult');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'Get_Srv_ListResult')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = datumnode_com_start_start_ip_radius_Get_Srv_ListResult_deserialize(cxfjsutils, curElement);
     }
     newobject.setGet_Srv_ListResult(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://datumnode.com/start/start_ip/radius}Get_Sessions_by_Login_SysResponse
//
function datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysResponse () {
    this.typeMarker = 'datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysResponse';
    this._Get_Sessions_by_Login_SysResult = null;
}

//
// accessor is datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysResponse.prototype.getGet_Sessions_by_Login_SysResult
// element get for Get_Sessions_by_Login_SysResult
// - element type is {http://datumnode.com/start/start_ip/radius}Get_Sessions_by_Login_SysResult
// - optional element
//
// element set for Get_Sessions_by_Login_SysResult
// setter function is is datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysResponse.prototype.setGet_Sessions_by_Login_SysResult
//
function datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysResponse_getGet_Sessions_by_Login_SysResult() { return this._Get_Sessions_by_Login_SysResult;}

datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysResponse.prototype.getGet_Sessions_by_Login_SysResult = datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysResponse_getGet_Sessions_by_Login_SysResult;

function datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysResponse_setGet_Sessions_by_Login_SysResult(value) { this._Get_Sessions_by_Login_SysResult = value;}

datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysResponse.prototype.setGet_Sessions_by_Login_SysResult = datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysResponse_setGet_Sessions_by_Login_SysResult;
//
// Serialize {http://datumnode.com/start/start_ip/radius}Get_Sessions_by_Login_SysResponse
//
function datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'DatumNode\' xmlns:jns1=\'http://datumnode.com/start/start_ip/radius\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._Get_Sessions_by_Login_SysResult != null) {
      xml = xml + this._Get_Sessions_by_Login_SysResult.serialize(cxfjsutils, 'jns1:Get_Sessions_by_Login_SysResult', null);
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysResponse.prototype.serialize = datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysResponse_serialize;

function datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysResponse_deserialize (cxfjsutils, element) {
    var newobject = new datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Get_Sessions_by_Login_SysResult');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'Get_Sessions_by_Login_SysResult')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysResult_deserialize(cxfjsutils, curElement);
     }
     newobject.setGet_Sessions_by_Login_SysResult(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://datumnode.com/start/start_ip/radius}Get_Access_SysdateResponse
//
function datumnode_com_start_start_ip_radius_Get_Access_SysdateResponse () {
    this.typeMarker = 'datumnode_com_start_start_ip_radius_Get_Access_SysdateResponse';
    this._Get_Access_SysdateResult = null;
}

//
// accessor is datumnode_com_start_start_ip_radius_Get_Access_SysdateResponse.prototype.getGet_Access_SysdateResult
// element get for Get_Access_SysdateResult
// - element type is {http://datumnode.com/start/start_ip/radius}Get_Access_SysdateResult
// - optional element
//
// element set for Get_Access_SysdateResult
// setter function is is datumnode_com_start_start_ip_radius_Get_Access_SysdateResponse.prototype.setGet_Access_SysdateResult
//
function datumnode_com_start_start_ip_radius_Get_Access_SysdateResponse_getGet_Access_SysdateResult() { return this._Get_Access_SysdateResult;}

datumnode_com_start_start_ip_radius_Get_Access_SysdateResponse.prototype.getGet_Access_SysdateResult = datumnode_com_start_start_ip_radius_Get_Access_SysdateResponse_getGet_Access_SysdateResult;

function datumnode_com_start_start_ip_radius_Get_Access_SysdateResponse_setGet_Access_SysdateResult(value) { this._Get_Access_SysdateResult = value;}

datumnode_com_start_start_ip_radius_Get_Access_SysdateResponse.prototype.setGet_Access_SysdateResult = datumnode_com_start_start_ip_radius_Get_Access_SysdateResponse_setGet_Access_SysdateResult;
//
// Serialize {http://datumnode.com/start/start_ip/radius}Get_Access_SysdateResponse
//
function datumnode_com_start_start_ip_radius_Get_Access_SysdateResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'DatumNode\' xmlns:jns1=\'http://datumnode.com/start/start_ip/radius\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._Get_Access_SysdateResult != null) {
      xml = xml + this._Get_Access_SysdateResult.serialize(cxfjsutils, 'jns1:Get_Access_SysdateResult', null);
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

datumnode_com_start_start_ip_radius_Get_Access_SysdateResponse.prototype.serialize = datumnode_com_start_start_ip_radius_Get_Access_SysdateResponse_serialize;

function datumnode_com_start_start_ip_radius_Get_Access_SysdateResponse_deserialize (cxfjsutils, element) {
    var newobject = new datumnode_com_start_start_ip_radius_Get_Access_SysdateResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Get_Access_SysdateResult');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'Get_Access_SysdateResult')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = datumnode_com_start_start_ip_radius_Get_Access_SysdateResult_deserialize(cxfjsutils, curElement);
     }
     newobject.setGet_Access_SysdateResult(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://datumnode.com/start/start_ip/radius}Get_Sessions_by_Login_Sys
//
function datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_Sys () {
    this.typeMarker = 'datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_Sys';
    this._request = null;
}

//
// accessor is datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_Sys.prototype.getRequest
// element get for request
// - element type is {http://datumnode.com/start/start_ip/radius}Get_Sessions_by_Login_SysRequest
// - optional element
//
// element set for request
// setter function is is datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_Sys.prototype.setRequest
//
function datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_Sys_getRequest() { return this._request;}

datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_Sys.prototype.getRequest = datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_Sys_getRequest;

function datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_Sys_setRequest(value) { this._request = value;}

datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_Sys.prototype.setRequest = datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_Sys_setRequest;
//
// Serialize {http://datumnode.com/start/start_ip/radius}Get_Sessions_by_Login_Sys
//
function datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_Sys_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'DatumNode\' xmlns:jns1=\'http://datumnode.com/start/start_ip/radius\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._request != null) {
      xml = xml + this._request.serialize(cxfjsutils, 'jns1:request', null);
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_Sys.prototype.serialize = datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_Sys_serialize;

function datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_Sys_deserialize (cxfjsutils, element) {
    var newobject = new datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_Sys();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing request');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'request')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysRequest_deserialize(cxfjsutils, curElement);
     }
     newobject.setRequest(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://datumnode.com/start/start_ip/radius}Stop_Radius_Session
//
function datumnode_com_start_start_ip_radius_Stop_Radius_Session () {
    this.typeMarker = 'datumnode_com_start_start_ip_radius_Stop_Radius_Session';
    this._request = null;
}

//
// accessor is datumnode_com_start_start_ip_radius_Stop_Radius_Session.prototype.getRequest
// element get for request
// - element type is {http://datumnode.com/start/start_ip/radius}Stop_Radius_SessionRequest
// - optional element
//
// element set for request
// setter function is is datumnode_com_start_start_ip_radius_Stop_Radius_Session.prototype.setRequest
//
function datumnode_com_start_start_ip_radius_Stop_Radius_Session_getRequest() { return this._request;}

datumnode_com_start_start_ip_radius_Stop_Radius_Session.prototype.getRequest = datumnode_com_start_start_ip_radius_Stop_Radius_Session_getRequest;

function datumnode_com_start_start_ip_radius_Stop_Radius_Session_setRequest(value) { this._request = value;}

datumnode_com_start_start_ip_radius_Stop_Radius_Session.prototype.setRequest = datumnode_com_start_start_ip_radius_Stop_Radius_Session_setRequest;
//
// Serialize {http://datumnode.com/start/start_ip/radius}Stop_Radius_Session
//
function datumnode_com_start_start_ip_radius_Stop_Radius_Session_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'DatumNode\' xmlns:jns1=\'http://datumnode.com/start/start_ip/radius\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._request != null) {
      xml = xml + this._request.serialize(cxfjsutils, 'jns1:request', null);
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

datumnode_com_start_start_ip_radius_Stop_Radius_Session.prototype.serialize = datumnode_com_start_start_ip_radius_Stop_Radius_Session_serialize;

function datumnode_com_start_start_ip_radius_Stop_Radius_Session_deserialize (cxfjsutils, element) {
    var newobject = new datumnode_com_start_start_ip_radius_Stop_Radius_Session();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing request');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'request')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = datumnode_com_start_start_ip_radius_Stop_Radius_SessionRequest_deserialize(cxfjsutils, curElement);
     }
     newobject.setRequest(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://datumnode.com/start/start_ip/radius}Get_Traffic_by_LoginResponse
//
function datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginResponse () {
    this.typeMarker = 'datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginResponse';
    this._Get_Traffic_by_LoginResult = null;
}

//
// accessor is datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginResponse.prototype.getGet_Traffic_by_LoginResult
// element get for Get_Traffic_by_LoginResult
// - element type is {http://datumnode.com/start/start_ip/radius}Get_Traffic_by_LoginResult
// - optional element
//
// element set for Get_Traffic_by_LoginResult
// setter function is is datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginResponse.prototype.setGet_Traffic_by_LoginResult
//
function datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginResponse_getGet_Traffic_by_LoginResult() { return this._Get_Traffic_by_LoginResult;}

datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginResponse.prototype.getGet_Traffic_by_LoginResult = datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginResponse_getGet_Traffic_by_LoginResult;

function datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginResponse_setGet_Traffic_by_LoginResult(value) { this._Get_Traffic_by_LoginResult = value;}

datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginResponse.prototype.setGet_Traffic_by_LoginResult = datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginResponse_setGet_Traffic_by_LoginResult;
//
// Serialize {http://datumnode.com/start/start_ip/radius}Get_Traffic_by_LoginResponse
//
function datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'DatumNode\' xmlns:jns1=\'http://datumnode.com/start/start_ip/radius\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._Get_Traffic_by_LoginResult != null) {
      xml = xml + this._Get_Traffic_by_LoginResult.serialize(cxfjsutils, 'jns1:Get_Traffic_by_LoginResult', null);
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginResponse.prototype.serialize = datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginResponse_serialize;

function datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginResponse_deserialize (cxfjsutils, element) {
    var newobject = new datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Get_Traffic_by_LoginResult');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'Get_Traffic_by_LoginResult')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginResult_deserialize(cxfjsutils, curElement);
     }
     newobject.setGet_Traffic_by_LoginResult(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://datumnode.com/start/start_ip/radius}Change_Password
//
function datumnode_com_start_start_ip_radius_Change_Password () {
    this.typeMarker = 'datumnode_com_start_start_ip_radius_Change_Password';
    this._request = null;
}

//
// accessor is datumnode_com_start_start_ip_radius_Change_Password.prototype.getRequest
// element get for request
// - element type is {http://datumnode.com/start/start_ip/radius}Change_PasswordRequest
// - optional element
//
// element set for request
// setter function is is datumnode_com_start_start_ip_radius_Change_Password.prototype.setRequest
//
function datumnode_com_start_start_ip_radius_Change_Password_getRequest() { return this._request;}

datumnode_com_start_start_ip_radius_Change_Password.prototype.getRequest = datumnode_com_start_start_ip_radius_Change_Password_getRequest;

function datumnode_com_start_start_ip_radius_Change_Password_setRequest(value) { this._request = value;}

datumnode_com_start_start_ip_radius_Change_Password.prototype.setRequest = datumnode_com_start_start_ip_radius_Change_Password_setRequest;
//
// Serialize {http://datumnode.com/start/start_ip/radius}Change_Password
//
function datumnode_com_start_start_ip_radius_Change_Password_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'DatumNode\' xmlns:jns1=\'http://datumnode.com/start/start_ip/radius\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._request != null) {
      xml = xml + this._request.serialize(cxfjsutils, 'jns1:request', null);
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

datumnode_com_start_start_ip_radius_Change_Password.prototype.serialize = datumnode_com_start_start_ip_radius_Change_Password_serialize;

function datumnode_com_start_start_ip_radius_Change_Password_deserialize (cxfjsutils, element) {
    var newobject = new datumnode_com_start_start_ip_radius_Change_Password();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing request');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'request')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = datumnode_com_start_start_ip_radius_Change_PasswordRequest_deserialize(cxfjsutils, curElement);
     }
     newobject.setRequest(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://datumnode.com/start/start_ip/radius}Get_Dev_Login
//
function datumnode_com_start_start_ip_radius_Get_Dev_Login () {
    this.typeMarker = 'datumnode_com_start_start_ip_radius_Get_Dev_Login';
    this._request = null;
}

//
// accessor is datumnode_com_start_start_ip_radius_Get_Dev_Login.prototype.getRequest
// element get for request
// - element type is {http://datumnode.com/start/start_ip/radius}Get_Dev_LoginRequest
// - optional element
//
// element set for request
// setter function is is datumnode_com_start_start_ip_radius_Get_Dev_Login.prototype.setRequest
//
function datumnode_com_start_start_ip_radius_Get_Dev_Login_getRequest() { return this._request;}

datumnode_com_start_start_ip_radius_Get_Dev_Login.prototype.getRequest = datumnode_com_start_start_ip_radius_Get_Dev_Login_getRequest;

function datumnode_com_start_start_ip_radius_Get_Dev_Login_setRequest(value) { this._request = value;}

datumnode_com_start_start_ip_radius_Get_Dev_Login.prototype.setRequest = datumnode_com_start_start_ip_radius_Get_Dev_Login_setRequest;
//
// Serialize {http://datumnode.com/start/start_ip/radius}Get_Dev_Login
//
function datumnode_com_start_start_ip_radius_Get_Dev_Login_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'DatumNode\' xmlns:jns1=\'http://datumnode.com/start/start_ip/radius\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._request != null) {
      xml = xml + this._request.serialize(cxfjsutils, 'jns1:request', null);
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

datumnode_com_start_start_ip_radius_Get_Dev_Login.prototype.serialize = datumnode_com_start_start_ip_radius_Get_Dev_Login_serialize;

function datumnode_com_start_start_ip_radius_Get_Dev_Login_deserialize (cxfjsutils, element) {
    var newobject = new datumnode_com_start_start_ip_radius_Get_Dev_Login();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing request');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'request')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = datumnode_com_start_start_ip_radius_Get_Dev_LoginRequest_deserialize(cxfjsutils, curElement);
     }
     newobject.setRequest(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://datumnode.com/start/start_ip/radius}Get_Srv_List
//
function datumnode_com_start_start_ip_radius_Get_Srv_List () {
    this.typeMarker = 'datumnode_com_start_start_ip_radius_Get_Srv_List';
    this._request = null;
}

//
// accessor is datumnode_com_start_start_ip_radius_Get_Srv_List.prototype.getRequest
// element get for request
// - element type is {http://datumnode.com/start/start_ip/radius}Get_Srv_ListRequest
// - optional element
//
// element set for request
// setter function is is datumnode_com_start_start_ip_radius_Get_Srv_List.prototype.setRequest
//
function datumnode_com_start_start_ip_radius_Get_Srv_List_getRequest() { return this._request;}

datumnode_com_start_start_ip_radius_Get_Srv_List.prototype.getRequest = datumnode_com_start_start_ip_radius_Get_Srv_List_getRequest;

function datumnode_com_start_start_ip_radius_Get_Srv_List_setRequest(value) { this._request = value;}

datumnode_com_start_start_ip_radius_Get_Srv_List.prototype.setRequest = datumnode_com_start_start_ip_radius_Get_Srv_List_setRequest;
//
// Serialize {http://datumnode.com/start/start_ip/radius}Get_Srv_List
//
function datumnode_com_start_start_ip_radius_Get_Srv_List_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'DatumNode\' xmlns:jns1=\'http://datumnode.com/start/start_ip/radius\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._request != null) {
      xml = xml + this._request.serialize(cxfjsutils, 'jns1:request', null);
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

datumnode_com_start_start_ip_radius_Get_Srv_List.prototype.serialize = datumnode_com_start_start_ip_radius_Get_Srv_List_serialize;

function datumnode_com_start_start_ip_radius_Get_Srv_List_deserialize (cxfjsutils, element) {
    var newobject = new datumnode_com_start_start_ip_radius_Get_Srv_List();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing request');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'request')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = datumnode_com_start_start_ip_radius_Get_Srv_ListRequest_deserialize(cxfjsutils, curElement);
     }
     newobject.setRequest(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://datumnode.com/start/start_ip/radius}Get_Access_by_Login
//
function datumnode_com_start_start_ip_radius_Get_Access_by_Login () {
    this.typeMarker = 'datumnode_com_start_start_ip_radius_Get_Access_by_Login';
    this._request = null;
}

//
// accessor is datumnode_com_start_start_ip_radius_Get_Access_by_Login.prototype.getRequest
// element get for request
// - element type is {http://datumnode.com/start/start_ip/radius}Get_Access_by_LoginRequest
// - optional element
//
// element set for request
// setter function is is datumnode_com_start_start_ip_radius_Get_Access_by_Login.prototype.setRequest
//
function datumnode_com_start_start_ip_radius_Get_Access_by_Login_getRequest() { return this._request;}

datumnode_com_start_start_ip_radius_Get_Access_by_Login.prototype.getRequest = datumnode_com_start_start_ip_radius_Get_Access_by_Login_getRequest;

function datumnode_com_start_start_ip_radius_Get_Access_by_Login_setRequest(value) { this._request = value;}

datumnode_com_start_start_ip_radius_Get_Access_by_Login.prototype.setRequest = datumnode_com_start_start_ip_radius_Get_Access_by_Login_setRequest;
//
// Serialize {http://datumnode.com/start/start_ip/radius}Get_Access_by_Login
//
function datumnode_com_start_start_ip_radius_Get_Access_by_Login_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'DatumNode\' xmlns:jns1=\'http://datumnode.com/start/start_ip/radius\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._request != null) {
      xml = xml + this._request.serialize(cxfjsutils, 'jns1:request', null);
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

datumnode_com_start_start_ip_radius_Get_Access_by_Login.prototype.serialize = datumnode_com_start_start_ip_radius_Get_Access_by_Login_serialize;

function datumnode_com_start_start_ip_radius_Get_Access_by_Login_deserialize (cxfjsutils, element) {
    var newobject = new datumnode_com_start_start_ip_radius_Get_Access_by_Login();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing request');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'request')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = datumnode_com_start_start_ip_radius_Get_Access_by_LoginRequest_deserialize(cxfjsutils, curElement);
     }
     newobject.setRequest(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://datumnode.com/start/start_ip/radius}Get_Access_by_LoginResponse
//
function datumnode_com_start_start_ip_radius_Get_Access_by_LoginResponse () {
    this.typeMarker = 'datumnode_com_start_start_ip_radius_Get_Access_by_LoginResponse';
    this._Get_Access_by_LoginResult = null;
}

//
// accessor is datumnode_com_start_start_ip_radius_Get_Access_by_LoginResponse.prototype.getGet_Access_by_LoginResult
// element get for Get_Access_by_LoginResult
// - element type is {http://datumnode.com/start/start_ip/radius}Get_Access_by_LoginResult
// - optional element
//
// element set for Get_Access_by_LoginResult
// setter function is is datumnode_com_start_start_ip_radius_Get_Access_by_LoginResponse.prototype.setGet_Access_by_LoginResult
//
function datumnode_com_start_start_ip_radius_Get_Access_by_LoginResponse_getGet_Access_by_LoginResult() { return this._Get_Access_by_LoginResult;}

datumnode_com_start_start_ip_radius_Get_Access_by_LoginResponse.prototype.getGet_Access_by_LoginResult = datumnode_com_start_start_ip_radius_Get_Access_by_LoginResponse_getGet_Access_by_LoginResult;

function datumnode_com_start_start_ip_radius_Get_Access_by_LoginResponse_setGet_Access_by_LoginResult(value) { this._Get_Access_by_LoginResult = value;}

datumnode_com_start_start_ip_radius_Get_Access_by_LoginResponse.prototype.setGet_Access_by_LoginResult = datumnode_com_start_start_ip_radius_Get_Access_by_LoginResponse_setGet_Access_by_LoginResult;
//
// Serialize {http://datumnode.com/start/start_ip/radius}Get_Access_by_LoginResponse
//
function datumnode_com_start_start_ip_radius_Get_Access_by_LoginResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'DatumNode\' xmlns:jns1=\'http://datumnode.com/start/start_ip/radius\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._Get_Access_by_LoginResult != null) {
      xml = xml + this._Get_Access_by_LoginResult.serialize(cxfjsutils, 'jns1:Get_Access_by_LoginResult', null);
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

datumnode_com_start_start_ip_radius_Get_Access_by_LoginResponse.prototype.serialize = datumnode_com_start_start_ip_radius_Get_Access_by_LoginResponse_serialize;

function datumnode_com_start_start_ip_radius_Get_Access_by_LoginResponse_deserialize (cxfjsutils, element) {
    var newobject = new datumnode_com_start_start_ip_radius_Get_Access_by_LoginResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Get_Access_by_LoginResult');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'Get_Access_by_LoginResult')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = datumnode_com_start_start_ip_radius_Get_Access_by_LoginResult_deserialize(cxfjsutils, curElement);
     }
     newobject.setGet_Access_by_LoginResult(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://datumnode.com/start/start_ip/radius}Change_PasswordResponse
//
function datumnode_com_start_start_ip_radius_Change_PasswordResponse () {
    this.typeMarker = 'datumnode_com_start_start_ip_radius_Change_PasswordResponse';
    this._Change_PasswordResult = null;
}

//
// accessor is datumnode_com_start_start_ip_radius_Change_PasswordResponse.prototype.getChange_PasswordResult
// element get for Change_PasswordResult
// - element type is {http://datumnode.com/start/start_ip/radius}Change_PasswordResult
// - optional element
//
// element set for Change_PasswordResult
// setter function is is datumnode_com_start_start_ip_radius_Change_PasswordResponse.prototype.setChange_PasswordResult
//
function datumnode_com_start_start_ip_radius_Change_PasswordResponse_getChange_PasswordResult() { return this._Change_PasswordResult;}

datumnode_com_start_start_ip_radius_Change_PasswordResponse.prototype.getChange_PasswordResult = datumnode_com_start_start_ip_radius_Change_PasswordResponse_getChange_PasswordResult;

function datumnode_com_start_start_ip_radius_Change_PasswordResponse_setChange_PasswordResult(value) { this._Change_PasswordResult = value;}

datumnode_com_start_start_ip_radius_Change_PasswordResponse.prototype.setChange_PasswordResult = datumnode_com_start_start_ip_radius_Change_PasswordResponse_setChange_PasswordResult;
//
// Serialize {http://datumnode.com/start/start_ip/radius}Change_PasswordResponse
//
function datumnode_com_start_start_ip_radius_Change_PasswordResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'DatumNode\' xmlns:jns1=\'http://datumnode.com/start/start_ip/radius\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._Change_PasswordResult != null) {
      xml = xml + this._Change_PasswordResult.serialize(cxfjsutils, 'jns1:Change_PasswordResult', null);
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

datumnode_com_start_start_ip_radius_Change_PasswordResponse.prototype.serialize = datumnode_com_start_start_ip_radius_Change_PasswordResponse_serialize;

function datumnode_com_start_start_ip_radius_Change_PasswordResponse_deserialize (cxfjsutils, element) {
    var newobject = new datumnode_com_start_start_ip_radius_Change_PasswordResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Change_PasswordResult');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'Change_PasswordResult')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = datumnode_com_start_start_ip_radius_Change_PasswordResult_deserialize(cxfjsutils, curElement);
     }
     newobject.setChange_PasswordResult(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://datumnode.com/start/start_ip/radius}Get_Sessions_by_Login
//
function datumnode_com_start_start_ip_radius_Get_Sessions_by_Login () {
    this.typeMarker = 'datumnode_com_start_start_ip_radius_Get_Sessions_by_Login';
    this._request = null;
}

//
// accessor is datumnode_com_start_start_ip_radius_Get_Sessions_by_Login.prototype.getRequest
// element get for request
// - element type is {http://datumnode.com/start/start_ip/radius}Get_Sessions_by_LoginRequest
// - optional element
//
// element set for request
// setter function is is datumnode_com_start_start_ip_radius_Get_Sessions_by_Login.prototype.setRequest
//
function datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_getRequest() { return this._request;}

datumnode_com_start_start_ip_radius_Get_Sessions_by_Login.prototype.getRequest = datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_getRequest;

function datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_setRequest(value) { this._request = value;}

datumnode_com_start_start_ip_radius_Get_Sessions_by_Login.prototype.setRequest = datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_setRequest;
//
// Serialize {http://datumnode.com/start/start_ip/radius}Get_Sessions_by_Login
//
function datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'DatumNode\' xmlns:jns1=\'http://datumnode.com/start/start_ip/radius\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._request != null) {
      xml = xml + this._request.serialize(cxfjsutils, 'jns1:request', null);
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

datumnode_com_start_start_ip_radius_Get_Sessions_by_Login.prototype.serialize = datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_serialize;

function datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_deserialize (cxfjsutils, element) {
    var newobject = new datumnode_com_start_start_ip_radius_Get_Sessions_by_Login();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing request');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'request')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginRequest_deserialize(cxfjsutils, curElement);
     }
     newobject.setRequest(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://datumnode.com/start/start_ip/radius}Get_Sessions_by_LoginResponse
//
function datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginResponse () {
    this.typeMarker = 'datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginResponse';
    this._Get_Sessions_by_LoginResult = null;
}

//
// accessor is datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginResponse.prototype.getGet_Sessions_by_LoginResult
// element get for Get_Sessions_by_LoginResult
// - element type is {http://datumnode.com/start/start_ip/radius}Get_Sessions_by_LoginResult
// - optional element
//
// element set for Get_Sessions_by_LoginResult
// setter function is is datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginResponse.prototype.setGet_Sessions_by_LoginResult
//
function datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginResponse_getGet_Sessions_by_LoginResult() { return this._Get_Sessions_by_LoginResult;}

datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginResponse.prototype.getGet_Sessions_by_LoginResult = datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginResponse_getGet_Sessions_by_LoginResult;

function datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginResponse_setGet_Sessions_by_LoginResult(value) { this._Get_Sessions_by_LoginResult = value;}

datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginResponse.prototype.setGet_Sessions_by_LoginResult = datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginResponse_setGet_Sessions_by_LoginResult;
//
// Serialize {http://datumnode.com/start/start_ip/radius}Get_Sessions_by_LoginResponse
//
function datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'DatumNode\' xmlns:jns1=\'http://datumnode.com/start/start_ip/radius\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._Get_Sessions_by_LoginResult != null) {
      xml = xml + this._Get_Sessions_by_LoginResult.serialize(cxfjsutils, 'jns1:Get_Sessions_by_LoginResult', null);
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginResponse.prototype.serialize = datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginResponse_serialize;

function datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginResponse_deserialize (cxfjsutils, element) {
    var newobject = new datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Get_Sessions_by_LoginResult');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'Get_Sessions_by_LoginResult')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginResult_deserialize(cxfjsutils, curElement);
     }
     newobject.setGet_Sessions_by_LoginResult(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://datumnode.com/start/start_ip/radius}Check_Profile
//
function datumnode_com_start_start_ip_radius_Check_Profile () {
    this.typeMarker = 'datumnode_com_start_start_ip_radius_Check_Profile';
    this._request = null;
}

//
// accessor is datumnode_com_start_start_ip_radius_Check_Profile.prototype.getRequest
// element get for request
// - element type is {http://datumnode.com/start/start_ip/radius}Check_ProfileRequest
// - optional element
//
// element set for request
// setter function is is datumnode_com_start_start_ip_radius_Check_Profile.prototype.setRequest
//
function datumnode_com_start_start_ip_radius_Check_Profile_getRequest() { return this._request;}

datumnode_com_start_start_ip_radius_Check_Profile.prototype.getRequest = datumnode_com_start_start_ip_radius_Check_Profile_getRequest;

function datumnode_com_start_start_ip_radius_Check_Profile_setRequest(value) { this._request = value;}

datumnode_com_start_start_ip_radius_Check_Profile.prototype.setRequest = datumnode_com_start_start_ip_radius_Check_Profile_setRequest;
//
// Serialize {http://datumnode.com/start/start_ip/radius}Check_Profile
//
function datumnode_com_start_start_ip_radius_Check_Profile_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'DatumNode\' xmlns:jns1=\'http://datumnode.com/start/start_ip/radius\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._request != null) {
      xml = xml + this._request.serialize(cxfjsutils, 'jns1:request', null);
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

datumnode_com_start_start_ip_radius_Check_Profile.prototype.serialize = datumnode_com_start_start_ip_radius_Check_Profile_serialize;

function datumnode_com_start_start_ip_radius_Check_Profile_deserialize (cxfjsutils, element) {
    var newobject = new datumnode_com_start_start_ip_radius_Check_Profile();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing request');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'request')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = datumnode_com_start_start_ip_radius_Check_ProfileRequest_deserialize(cxfjsutils, curElement);
     }
     newobject.setRequest(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://datumnode.com/start/start_ip/radius}Get_Access_by_Login_SysResponse
//
function datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysResponse () {
    this.typeMarker = 'datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysResponse';
    this._Get_Access_by_Login_SysResult = null;
}

//
// accessor is datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysResponse.prototype.getGet_Access_by_Login_SysResult
// element get for Get_Access_by_Login_SysResult
// - element type is {http://datumnode.com/start/start_ip/radius}Get_Access_by_Login_SysResult
// - optional element
//
// element set for Get_Access_by_Login_SysResult
// setter function is is datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysResponse.prototype.setGet_Access_by_Login_SysResult
//
function datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysResponse_getGet_Access_by_Login_SysResult() { return this._Get_Access_by_Login_SysResult;}

datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysResponse.prototype.getGet_Access_by_Login_SysResult = datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysResponse_getGet_Access_by_Login_SysResult;

function datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysResponse_setGet_Access_by_Login_SysResult(value) { this._Get_Access_by_Login_SysResult = value;}

datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysResponse.prototype.setGet_Access_by_Login_SysResult = datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysResponse_setGet_Access_by_Login_SysResult;
//
// Serialize {http://datumnode.com/start/start_ip/radius}Get_Access_by_Login_SysResponse
//
function datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'DatumNode\' xmlns:jns1=\'http://datumnode.com/start/start_ip/radius\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._Get_Access_by_Login_SysResult != null) {
      xml = xml + this._Get_Access_by_Login_SysResult.serialize(cxfjsutils, 'jns1:Get_Access_by_Login_SysResult', null);
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysResponse.prototype.serialize = datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysResponse_serialize;

function datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysResponse_deserialize (cxfjsutils, element) {
    var newobject = new datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Get_Access_by_Login_SysResult');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://datumnode.com/start/start_ip/radius', 'Get_Access_by_Login_SysResult')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysResult_deserialize(cxfjsutils, curElement);
     }
     newobject.setGet_Access_by_Login_SysResult(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Definitions for service: {http://datumnode.com/start/start_ip/radius}radius
//

// Javascript for {http://datumnode.com/start/start_ip/radius}radius

function datumnode_com_start_start_ip_radius_radius () {
    this.jsutils = new CxfApacheOrgUtil();
    this.jsutils.interfaceObject = this;
    this.synchronous = false;
    this.url = null;
    this.client = null;
    this.response = null;
    this.globalElementSerializers = [];
    this.globalElementDeserializers = [];
    this.globalElementSerializers['{DatumNode}MetaConnection'] = DN_MetaConnection_serialize;
    this.globalElementDeserializers['{DatumNode}MetaConnection'] = DN_MetaConnection_deserialize;
    this.globalElementSerializers['{DatumNode}DbException'] = DN_DbException_serialize;
    this.globalElementDeserializers['{DatumNode}DbException'] = DN_DbException_deserialize;
    this.globalElementSerializers['{DatumNode}MetaCommand'] = DN_MetaCommand_serialize;
    this.globalElementDeserializers['{DatumNode}MetaCommand'] = DN_MetaCommand_deserialize;
    this.globalElementSerializers['{DatumNode}DbResult'] = DN_DbResult_serialize;
    this.globalElementDeserializers['{DatumNode}DbResult'] = DN_DbResult_deserialize;
    this.globalElementSerializers['{DatumNode}MetaCommand'] = DN_MetaCommand_serialize;
    this.globalElementDeserializers['{DatumNode}MetaCommand'] = DN_MetaCommand_deserialize;
    this.globalElementSerializers['{DatumNode}DbResult'] = DN_DbResult_serialize;
    this.globalElementDeserializers['{DatumNode}DbResult'] = DN_DbResult_deserialize;
    this.globalElementSerializers['{DatumNode}DbException'] = DN_DbException_serialize;
    this.globalElementDeserializers['{DatumNode}DbException'] = DN_DbException_deserialize;
    this.globalElementSerializers['{DatumNode}MetaConnection'] = DN_MetaConnection_serialize;
    this.globalElementDeserializers['{DatumNode}MetaConnection'] = DN_MetaConnection_deserialize;
    this.globalElementSerializers['{http://datumnode.com/start/start_ip/radius}Get_Access_Sysdate'] = datumnode_com_start_start_ip_radius_Get_Access_Sysdate_serialize;
    this.globalElementDeserializers['{http://datumnode.com/start/start_ip/radius}Get_Access_Sysdate'] = datumnode_com_start_start_ip_radius_Get_Access_Sysdate_deserialize;
    this.globalElementSerializers['{http://datumnode.com/start/start_ip/radius}Get_Dev_LoginResponse'] = datumnode_com_start_start_ip_radius_Get_Dev_LoginResponse_serialize;
    this.globalElementDeserializers['{http://datumnode.com/start/start_ip/radius}Get_Dev_LoginResponse'] = datumnode_com_start_start_ip_radius_Get_Dev_LoginResponse_deserialize;
    this.globalElementSerializers['{http://datumnode.com/start/start_ip/radius}Get_Access_by_Login_Sys'] = datumnode_com_start_start_ip_radius_Get_Access_by_Login_Sys_serialize;
    this.globalElementDeserializers['{http://datumnode.com/start/start_ip/radius}Get_Access_by_Login_Sys'] = datumnode_com_start_start_ip_radius_Get_Access_by_Login_Sys_deserialize;
    this.globalElementSerializers['{http://datumnode.com/start/start_ip/radius}Check_ProfileResponse'] = datumnode_com_start_start_ip_radius_Check_ProfileResponse_serialize;
    this.globalElementDeserializers['{http://datumnode.com/start/start_ip/radius}Check_ProfileResponse'] = datumnode_com_start_start_ip_radius_Check_ProfileResponse_deserialize;
    this.globalElementSerializers['{http://datumnode.com/start/start_ip/radius}Stop_Radius_SessionResponse'] = datumnode_com_start_start_ip_radius_Stop_Radius_SessionResponse_serialize;
    this.globalElementDeserializers['{http://datumnode.com/start/start_ip/radius}Stop_Radius_SessionResponse'] = datumnode_com_start_start_ip_radius_Stop_Radius_SessionResponse_deserialize;
    this.globalElementSerializers['{http://datumnode.com/start/start_ip/radius}Get_Traffic_by_Login'] = datumnode_com_start_start_ip_radius_Get_Traffic_by_Login_serialize;
    this.globalElementDeserializers['{http://datumnode.com/start/start_ip/radius}Get_Traffic_by_Login'] = datumnode_com_start_start_ip_radius_Get_Traffic_by_Login_deserialize;
    this.globalElementSerializers['{http://datumnode.com/start/start_ip/radius}Get_Srv_ListResponse'] = datumnode_com_start_start_ip_radius_Get_Srv_ListResponse_serialize;
    this.globalElementDeserializers['{http://datumnode.com/start/start_ip/radius}Get_Srv_ListResponse'] = datumnode_com_start_start_ip_radius_Get_Srv_ListResponse_deserialize;
    this.globalElementSerializers['{http://datumnode.com/start/start_ip/radius}Get_Sessions_by_Login_SysResponse'] = datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysResponse_serialize;
    this.globalElementDeserializers['{http://datumnode.com/start/start_ip/radius}Get_Sessions_by_Login_SysResponse'] = datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysResponse_deserialize;
    this.globalElementSerializers['{http://datumnode.com/start/start_ip/radius}Get_Access_SysdateResponse'] = datumnode_com_start_start_ip_radius_Get_Access_SysdateResponse_serialize;
    this.globalElementDeserializers['{http://datumnode.com/start/start_ip/radius}Get_Access_SysdateResponse'] = datumnode_com_start_start_ip_radius_Get_Access_SysdateResponse_deserialize;
    this.globalElementSerializers['{http://datumnode.com/start/start_ip/radius}Get_Sessions_by_Login_Sys'] = datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_Sys_serialize;
    this.globalElementDeserializers['{http://datumnode.com/start/start_ip/radius}Get_Sessions_by_Login_Sys'] = datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_Sys_deserialize;
    this.globalElementSerializers['{http://datumnode.com/start/start_ip/radius}Stop_Radius_Session'] = datumnode_com_start_start_ip_radius_Stop_Radius_Session_serialize;
    this.globalElementDeserializers['{http://datumnode.com/start/start_ip/radius}Stop_Radius_Session'] = datumnode_com_start_start_ip_radius_Stop_Radius_Session_deserialize;
    this.globalElementSerializers['{http://datumnode.com/start/start_ip/radius}Get_Traffic_by_LoginResponse'] = datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginResponse_serialize;
    this.globalElementDeserializers['{http://datumnode.com/start/start_ip/radius}Get_Traffic_by_LoginResponse'] = datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginResponse_deserialize;
    this.globalElementSerializers['{http://datumnode.com/start/start_ip/radius}Change_Password'] = datumnode_com_start_start_ip_radius_Change_Password_serialize;
    this.globalElementDeserializers['{http://datumnode.com/start/start_ip/radius}Change_Password'] = datumnode_com_start_start_ip_radius_Change_Password_deserialize;
    this.globalElementSerializers['{http://datumnode.com/start/start_ip/radius}Get_Dev_Login'] = datumnode_com_start_start_ip_radius_Get_Dev_Login_serialize;
    this.globalElementDeserializers['{http://datumnode.com/start/start_ip/radius}Get_Dev_Login'] = datumnode_com_start_start_ip_radius_Get_Dev_Login_deserialize;
    this.globalElementSerializers['{http://datumnode.com/start/start_ip/radius}Get_Srv_List'] = datumnode_com_start_start_ip_radius_Get_Srv_List_serialize;
    this.globalElementDeserializers['{http://datumnode.com/start/start_ip/radius}Get_Srv_List'] = datumnode_com_start_start_ip_radius_Get_Srv_List_deserialize;
    this.globalElementSerializers['{http://datumnode.com/start/start_ip/radius}Get_Access_by_Login'] = datumnode_com_start_start_ip_radius_Get_Access_by_Login_serialize;
    this.globalElementDeserializers['{http://datumnode.com/start/start_ip/radius}Get_Access_by_Login'] = datumnode_com_start_start_ip_radius_Get_Access_by_Login_deserialize;
    this.globalElementSerializers['{http://datumnode.com/start/start_ip/radius}Get_Access_by_LoginResponse'] = datumnode_com_start_start_ip_radius_Get_Access_by_LoginResponse_serialize;
    this.globalElementDeserializers['{http://datumnode.com/start/start_ip/radius}Get_Access_by_LoginResponse'] = datumnode_com_start_start_ip_radius_Get_Access_by_LoginResponse_deserialize;
    this.globalElementSerializers['{http://datumnode.com/start/start_ip/radius}Change_PasswordResponse'] = datumnode_com_start_start_ip_radius_Change_PasswordResponse_serialize;
    this.globalElementDeserializers['{http://datumnode.com/start/start_ip/radius}Change_PasswordResponse'] = datumnode_com_start_start_ip_radius_Change_PasswordResponse_deserialize;
    this.globalElementSerializers['{http://datumnode.com/start/start_ip/radius}Get_Sessions_by_Login'] = datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_serialize;
    this.globalElementDeserializers['{http://datumnode.com/start/start_ip/radius}Get_Sessions_by_Login'] = datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_deserialize;
    this.globalElementSerializers['{http://datumnode.com/start/start_ip/radius}Get_Sessions_by_LoginResponse'] = datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginResponse_serialize;
    this.globalElementDeserializers['{http://datumnode.com/start/start_ip/radius}Get_Sessions_by_LoginResponse'] = datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginResponse_deserialize;
    this.globalElementSerializers['{http://datumnode.com/start/start_ip/radius}Check_Profile'] = datumnode_com_start_start_ip_radius_Check_Profile_serialize;
    this.globalElementDeserializers['{http://datumnode.com/start/start_ip/radius}Check_Profile'] = datumnode_com_start_start_ip_radius_Check_Profile_deserialize;
    this.globalElementSerializers['{http://datumnode.com/start/start_ip/radius}Get_Access_by_Login_SysResponse'] = datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysResponse_serialize;
    this.globalElementDeserializers['{http://datumnode.com/start/start_ip/radius}Get_Access_by_Login_SysResponse'] = datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysResponse_deserialize;
    this.globalElementSerializers['{http://datumnode.com/start/start_ip/radius}Get_Access_SysdateResult'] = datumnode_com_start_start_ip_radius_Get_Access_SysdateResult_serialize;
    this.globalElementDeserializers['{http://datumnode.com/start/start_ip/radius}Get_Access_SysdateResult'] = datumnode_com_start_start_ip_radius_Get_Access_SysdateResult_deserialize;
    this.globalElementSerializers['{http://datumnode.com/start/start_ip/radius}Stop_Radius_SessionRequest'] = datumnode_com_start_start_ip_radius_Stop_Radius_SessionRequest_serialize;
    this.globalElementDeserializers['{http://datumnode.com/start/start_ip/radius}Stop_Radius_SessionRequest'] = datumnode_com_start_start_ip_radius_Stop_Radius_SessionRequest_deserialize;
    this.globalElementSerializers['{http://datumnode.com/start/start_ip/radius}Get_Traffic_by_LoginInputParameters'] = datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginInputParameters_serialize;
    this.globalElementDeserializers['{http://datumnode.com/start/start_ip/radius}Get_Traffic_by_LoginInputParameters'] = datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginInputParameters_deserialize;
    this.globalElementSerializers['{http://datumnode.com/start/start_ip/radius}Get_Sessions_by_LoginOutputParameters'] = datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginOutputParameters_serialize;
    this.globalElementDeserializers['{http://datumnode.com/start/start_ip/radius}Get_Sessions_by_LoginOutputParameters'] = datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginOutputParameters_deserialize;
    this.globalElementSerializers['{http://datumnode.com/start/start_ip/radius}Get_Sessions_by_LoginRequest'] = datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginRequest_serialize;
    this.globalElementDeserializers['{http://datumnode.com/start/start_ip/radius}Get_Sessions_by_LoginRequest'] = datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginRequest_deserialize;
    this.globalElementSerializers['{http://datumnode.com/start/start_ip/radius}Get_Traffic_by_LoginResult'] = datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginResult_serialize;
    this.globalElementDeserializers['{http://datumnode.com/start/start_ip/radius}Get_Traffic_by_LoginResult'] = datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginResult_deserialize;
    this.globalElementSerializers['{http://datumnode.com/start/start_ip/radius}Get_Access_by_LoginResult'] = datumnode_com_start_start_ip_radius_Get_Access_by_LoginResult_serialize;
    this.globalElementDeserializers['{http://datumnode.com/start/start_ip/radius}Get_Access_by_LoginResult'] = datumnode_com_start_start_ip_radius_Get_Access_by_LoginResult_deserialize;
    this.globalElementSerializers['{http://datumnode.com/start/start_ip/radius}Get_Srv_ListInputParameters'] = datumnode_com_start_start_ip_radius_Get_Srv_ListInputParameters_serialize;
    this.globalElementDeserializers['{http://datumnode.com/start/start_ip/radius}Get_Srv_ListInputParameters'] = datumnode_com_start_start_ip_radius_Get_Srv_ListInputParameters_deserialize;
    this.globalElementSerializers['{http://datumnode.com/start/start_ip/radius}Get_Sessions_by_LoginEntity'] = datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity_serialize;
    this.globalElementDeserializers['{http://datumnode.com/start/start_ip/radius}Get_Sessions_by_LoginEntity'] = datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginEntity_deserialize;
    this.globalElementSerializers['{http://datumnode.com/start/start_ip/radius}ArrayOfGet_Access_by_LoginEntity'] = datumnode_com_start_start_ip_radius_ArrayOfGet_Access_by_LoginEntity_serialize;
    this.globalElementDeserializers['{http://datumnode.com/start/start_ip/radius}ArrayOfGet_Access_by_LoginEntity'] = datumnode_com_start_start_ip_radius_ArrayOfGet_Access_by_LoginEntity_deserialize;
    this.globalElementSerializers['{http://datumnode.com/start/start_ip/radius}ArrayOfGet_Sessions_by_LoginEntity'] = datumnode_com_start_start_ip_radius_ArrayOfGet_Sessions_by_LoginEntity_serialize;
    this.globalElementDeserializers['{http://datumnode.com/start/start_ip/radius}ArrayOfGet_Sessions_by_LoginEntity'] = datumnode_com_start_start_ip_radius_ArrayOfGet_Sessions_by_LoginEntity_deserialize;
    this.globalElementSerializers['{http://datumnode.com/start/start_ip/radius}Get_Access_SysdateRequest'] = datumnode_com_start_start_ip_radius_Get_Access_SysdateRequest_serialize;
    this.globalElementDeserializers['{http://datumnode.com/start/start_ip/radius}Get_Access_SysdateRequest'] = datumnode_com_start_start_ip_radius_Get_Access_SysdateRequest_deserialize;
    this.globalElementSerializers['{http://datumnode.com/start/start_ip/radius}Check_ProfileRequest'] = datumnode_com_start_start_ip_radius_Check_ProfileRequest_serialize;
    this.globalElementDeserializers['{http://datumnode.com/start/start_ip/radius}Check_ProfileRequest'] = datumnode_com_start_start_ip_radius_Check_ProfileRequest_deserialize;
    this.globalElementSerializers['{http://datumnode.com/start/start_ip/radius}Get_Access_by_LoginOutputParameters'] = datumnode_com_start_start_ip_radius_Get_Access_by_LoginOutputParameters_serialize;
    this.globalElementDeserializers['{http://datumnode.com/start/start_ip/radius}Get_Access_by_LoginOutputParameters'] = datumnode_com_start_start_ip_radius_Get_Access_by_LoginOutputParameters_deserialize;
    this.globalElementSerializers['{http://datumnode.com/start/start_ip/radius}Get_Dev_LoginEntity'] = datumnode_com_start_start_ip_radius_Get_Dev_LoginEntity_serialize;
    this.globalElementDeserializers['{http://datumnode.com/start/start_ip/radius}Get_Dev_LoginEntity'] = datumnode_com_start_start_ip_radius_Get_Dev_LoginEntity_deserialize;
    this.globalElementSerializers['{http://datumnode.com/start/start_ip/radius}ArrayOfGet_Access_by_Login_SysEntity'] = datumnode_com_start_start_ip_radius_ArrayOfGet_Access_by_Login_SysEntity_serialize;
    this.globalElementDeserializers['{http://datumnode.com/start/start_ip/radius}ArrayOfGet_Access_by_Login_SysEntity'] = datumnode_com_start_start_ip_radius_ArrayOfGet_Access_by_Login_SysEntity_deserialize;
    this.globalElementSerializers['{http://datumnode.com/start/start_ip/radius}Get_Sessions_by_LoginInputParameters'] = datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginInputParameters_serialize;
    this.globalElementDeserializers['{http://datumnode.com/start/start_ip/radius}Get_Sessions_by_LoginInputParameters'] = datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginInputParameters_deserialize;
    this.globalElementSerializers['{http://datumnode.com/start/start_ip/radius}Get_Traffic_by_LoginOutputParameters'] = datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginOutputParameters_serialize;
    this.globalElementDeserializers['{http://datumnode.com/start/start_ip/radius}Get_Traffic_by_LoginOutputParameters'] = datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginOutputParameters_deserialize;
    this.globalElementSerializers['{http://datumnode.com/start/start_ip/radius}ArrayOfGet_Access_SysdateEntity'] = datumnode_com_start_start_ip_radius_ArrayOfGet_Access_SysdateEntity_serialize;
    this.globalElementDeserializers['{http://datumnode.com/start/start_ip/radius}ArrayOfGet_Access_SysdateEntity'] = datumnode_com_start_start_ip_radius_ArrayOfGet_Access_SysdateEntity_deserialize;
    this.globalElementSerializers['{http://datumnode.com/start/start_ip/radius}Change_PasswordInputParameters'] = datumnode_com_start_start_ip_radius_Change_PasswordInputParameters_serialize;
    this.globalElementDeserializers['{http://datumnode.com/start/start_ip/radius}Change_PasswordInputParameters'] = datumnode_com_start_start_ip_radius_Change_PasswordInputParameters_deserialize;
    this.globalElementSerializers['{http://datumnode.com/start/start_ip/radius}Get_Traffic_by_LoginEntity'] = datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginEntity_serialize;
    this.globalElementDeserializers['{http://datumnode.com/start/start_ip/radius}Get_Traffic_by_LoginEntity'] = datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginEntity_deserialize;
    this.globalElementSerializers['{http://datumnode.com/start/start_ip/radius}Get_Access_SysdateEntity'] = datumnode_com_start_start_ip_radius_Get_Access_SysdateEntity_serialize;
    this.globalElementDeserializers['{http://datumnode.com/start/start_ip/radius}Get_Access_SysdateEntity'] = datumnode_com_start_start_ip_radius_Get_Access_SysdateEntity_deserialize;
    this.globalElementSerializers['{http://datumnode.com/start/start_ip/radius}Stop_Radius_SessionOutputParameters'] = datumnode_com_start_start_ip_radius_Stop_Radius_SessionOutputParameters_serialize;
    this.globalElementDeserializers['{http://datumnode.com/start/start_ip/radius}Stop_Radius_SessionOutputParameters'] = datumnode_com_start_start_ip_radius_Stop_Radius_SessionOutputParameters_deserialize;
    this.globalElementSerializers['{http://datumnode.com/start/start_ip/radius}Change_PasswordResult'] = datumnode_com_start_start_ip_radius_Change_PasswordResult_serialize;
    this.globalElementDeserializers['{http://datumnode.com/start/start_ip/radius}Change_PasswordResult'] = datumnode_com_start_start_ip_radius_Change_PasswordResult_deserialize;
    this.globalElementSerializers['{http://datumnode.com/start/start_ip/radius}Get_Sessions_by_Login_SysEntity'] = datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity_serialize;
    this.globalElementDeserializers['{http://datumnode.com/start/start_ip/radius}Get_Sessions_by_Login_SysEntity'] = datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysEntity_deserialize;
    this.globalElementSerializers['{http://datumnode.com/start/start_ip/radius}Get_Access_SysdateInputParameters'] = datumnode_com_start_start_ip_radius_Get_Access_SysdateInputParameters_serialize;
    this.globalElementDeserializers['{http://datumnode.com/start/start_ip/radius}Get_Access_SysdateInputParameters'] = datumnode_com_start_start_ip_radius_Get_Access_SysdateInputParameters_deserialize;
    this.globalElementSerializers['{http://datumnode.com/start/start_ip/radius}Get_Sessions_by_Login_SysInputParameters'] = datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysInputParameters_serialize;
    this.globalElementDeserializers['{http://datumnode.com/start/start_ip/radius}Get_Sessions_by_Login_SysInputParameters'] = datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysInputParameters_deserialize;
    this.globalElementSerializers['{http://datumnode.com/start/start_ip/radius}ArrayOfGet_Sessions_by_Login_SysEntity'] = datumnode_com_start_start_ip_radius_ArrayOfGet_Sessions_by_Login_SysEntity_serialize;
    this.globalElementDeserializers['{http://datumnode.com/start/start_ip/radius}ArrayOfGet_Sessions_by_Login_SysEntity'] = datumnode_com_start_start_ip_radius_ArrayOfGet_Sessions_by_Login_SysEntity_deserialize;
    this.globalElementSerializers['{http://datumnode.com/start/start_ip/radius}Get_Access_by_Login_SysEntity'] = datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysEntity_serialize;
    this.globalElementDeserializers['{http://datumnode.com/start/start_ip/radius}Get_Access_by_Login_SysEntity'] = datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysEntity_deserialize;
    this.globalElementSerializers['{http://datumnode.com/start/start_ip/radius}Change_PasswordOutputParameters'] = datumnode_com_start_start_ip_radius_Change_PasswordOutputParameters_serialize;
    this.globalElementDeserializers['{http://datumnode.com/start/start_ip/radius}Change_PasswordOutputParameters'] = datumnode_com_start_start_ip_radius_Change_PasswordOutputParameters_deserialize;
    this.globalElementSerializers['{http://datumnode.com/start/start_ip/radius}Get_Access_by_Login_SysOutputParameters'] = datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysOutputParameters_serialize;
    this.globalElementDeserializers['{http://datumnode.com/start/start_ip/radius}Get_Access_by_Login_SysOutputParameters'] = datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysOutputParameters_deserialize;
    this.globalElementSerializers['{http://datumnode.com/start/start_ip/radius}Get_Srv_ListResult'] = datumnode_com_start_start_ip_radius_Get_Srv_ListResult_serialize;
    this.globalElementDeserializers['{http://datumnode.com/start/start_ip/radius}Get_Srv_ListResult'] = datumnode_com_start_start_ip_radius_Get_Srv_ListResult_deserialize;
    this.globalElementSerializers['{http://datumnode.com/start/start_ip/radius}Stop_Radius_SessionInputParameters'] = datumnode_com_start_start_ip_radius_Stop_Radius_SessionInputParameters_serialize;
    this.globalElementDeserializers['{http://datumnode.com/start/start_ip/radius}Stop_Radius_SessionInputParameters'] = datumnode_com_start_start_ip_radius_Stop_Radius_SessionInputParameters_deserialize;
    this.globalElementSerializers['{http://datumnode.com/start/start_ip/radius}Get_Sessions_by_Login_SysRequest'] = datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysRequest_serialize;
    this.globalElementDeserializers['{http://datumnode.com/start/start_ip/radius}Get_Sessions_by_Login_SysRequest'] = datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysRequest_deserialize;
    this.globalElementSerializers['{http://datumnode.com/start/start_ip/radius}Get_Dev_LoginInputParameters'] = datumnode_com_start_start_ip_radius_Get_Dev_LoginInputParameters_serialize;
    this.globalElementDeserializers['{http://datumnode.com/start/start_ip/radius}Get_Dev_LoginInputParameters'] = datumnode_com_start_start_ip_radius_Get_Dev_LoginInputParameters_deserialize;
    this.globalElementSerializers['{http://datumnode.com/start/start_ip/radius}Get_Access_by_Login_SysResult'] = datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysResult_serialize;
    this.globalElementDeserializers['{http://datumnode.com/start/start_ip/radius}Get_Access_by_Login_SysResult'] = datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysResult_deserialize;
    this.globalElementSerializers['{http://datumnode.com/start/start_ip/radius}Get_Access_by_Login_SysInputParameters'] = datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysInputParameters_serialize;
    this.globalElementDeserializers['{http://datumnode.com/start/start_ip/radius}Get_Access_by_Login_SysInputParameters'] = datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysInputParameters_deserialize;
    this.globalElementSerializers['{http://datumnode.com/start/start_ip/radius}ArrayOfGet_Srv_ListEntity'] = datumnode_com_start_start_ip_radius_ArrayOfGet_Srv_ListEntity_serialize;
    this.globalElementDeserializers['{http://datumnode.com/start/start_ip/radius}ArrayOfGet_Srv_ListEntity'] = datumnode_com_start_start_ip_radius_ArrayOfGet_Srv_ListEntity_deserialize;
    this.globalElementSerializers['{http://datumnode.com/start/start_ip/radius}Check_ProfileInputParameters'] = datumnode_com_start_start_ip_radius_Check_ProfileInputParameters_serialize;
    this.globalElementDeserializers['{http://datumnode.com/start/start_ip/radius}Check_ProfileInputParameters'] = datumnode_com_start_start_ip_radius_Check_ProfileInputParameters_deserialize;
    this.globalElementSerializers['{http://datumnode.com/start/start_ip/radius}Check_ProfileOutputParameters'] = datumnode_com_start_start_ip_radius_Check_ProfileOutputParameters_serialize;
    this.globalElementDeserializers['{http://datumnode.com/start/start_ip/radius}Check_ProfileOutputParameters'] = datumnode_com_start_start_ip_radius_Check_ProfileOutputParameters_deserialize;
    this.globalElementSerializers['{http://datumnode.com/start/start_ip/radius}Get_Sessions_by_LoginResult'] = datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginResult_serialize;
    this.globalElementDeserializers['{http://datumnode.com/start/start_ip/radius}Get_Sessions_by_LoginResult'] = datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginResult_deserialize;
    this.globalElementSerializers['{http://datumnode.com/start/start_ip/radius}Get_Srv_ListOutputParameters'] = datumnode_com_start_start_ip_radius_Get_Srv_ListOutputParameters_serialize;
    this.globalElementDeserializers['{http://datumnode.com/start/start_ip/radius}Get_Srv_ListOutputParameters'] = datumnode_com_start_start_ip_radius_Get_Srv_ListOutputParameters_deserialize;
    this.globalElementSerializers['{http://datumnode.com/start/start_ip/radius}Get_Access_by_LoginRequest'] = datumnode_com_start_start_ip_radius_Get_Access_by_LoginRequest_serialize;
    this.globalElementDeserializers['{http://datumnode.com/start/start_ip/radius}Get_Access_by_LoginRequest'] = datumnode_com_start_start_ip_radius_Get_Access_by_LoginRequest_deserialize;
    this.globalElementSerializers['{http://datumnode.com/start/start_ip/radius}Change_PasswordRequest'] = datumnode_com_start_start_ip_radius_Change_PasswordRequest_serialize;
    this.globalElementDeserializers['{http://datumnode.com/start/start_ip/radius}Change_PasswordRequest'] = datumnode_com_start_start_ip_radius_Change_PasswordRequest_deserialize;
    this.globalElementSerializers['{http://datumnode.com/start/start_ip/radius}Check_ProfileResult'] = datumnode_com_start_start_ip_radius_Check_ProfileResult_serialize;
    this.globalElementDeserializers['{http://datumnode.com/start/start_ip/radius}Check_ProfileResult'] = datumnode_com_start_start_ip_radius_Check_ProfileResult_deserialize;
    this.globalElementSerializers['{http://datumnode.com/start/start_ip/radius}Get_Dev_LoginRequest'] = datumnode_com_start_start_ip_radius_Get_Dev_LoginRequest_serialize;
    this.globalElementDeserializers['{http://datumnode.com/start/start_ip/radius}Get_Dev_LoginRequest'] = datumnode_com_start_start_ip_radius_Get_Dev_LoginRequest_deserialize;
    this.globalElementSerializers['{http://datumnode.com/start/start_ip/radius}Stop_Radius_SessionResult'] = datumnode_com_start_start_ip_radius_Stop_Radius_SessionResult_serialize;
    this.globalElementDeserializers['{http://datumnode.com/start/start_ip/radius}Stop_Radius_SessionResult'] = datumnode_com_start_start_ip_radius_Stop_Radius_SessionResult_deserialize;
    this.globalElementSerializers['{http://datumnode.com/start/start_ip/radius}Get_Traffic_by_LoginRequest'] = datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginRequest_serialize;
    this.globalElementDeserializers['{http://datumnode.com/start/start_ip/radius}Get_Traffic_by_LoginRequest'] = datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginRequest_deserialize;
    this.globalElementSerializers['{http://datumnode.com/start/start_ip/radius}Get_Access_by_LoginEntity'] = datumnode_com_start_start_ip_radius_Get_Access_by_LoginEntity_serialize;
    this.globalElementDeserializers['{http://datumnode.com/start/start_ip/radius}Get_Access_by_LoginEntity'] = datumnode_com_start_start_ip_radius_Get_Access_by_LoginEntity_deserialize;
    this.globalElementSerializers['{http://datumnode.com/start/start_ip/radius}Get_Access_by_LoginInputParameters'] = datumnode_com_start_start_ip_radius_Get_Access_by_LoginInputParameters_serialize;
    this.globalElementDeserializers['{http://datumnode.com/start/start_ip/radius}Get_Access_by_LoginInputParameters'] = datumnode_com_start_start_ip_radius_Get_Access_by_LoginInputParameters_deserialize;
    this.globalElementSerializers['{http://datumnode.com/start/start_ip/radius}Get_Sessions_by_Login_SysResult'] = datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysResult_serialize;
    this.globalElementDeserializers['{http://datumnode.com/start/start_ip/radius}Get_Sessions_by_Login_SysResult'] = datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysResult_deserialize;
    this.globalElementSerializers['{http://datumnode.com/start/start_ip/radius}Get_Srv_ListRequest'] = datumnode_com_start_start_ip_radius_Get_Srv_ListRequest_serialize;
    this.globalElementDeserializers['{http://datumnode.com/start/start_ip/radius}Get_Srv_ListRequest'] = datumnode_com_start_start_ip_radius_Get_Srv_ListRequest_deserialize;
    this.globalElementSerializers['{http://datumnode.com/start/start_ip/radius}ArrayOfGet_Traffic_by_LoginEntity'] = datumnode_com_start_start_ip_radius_ArrayOfGet_Traffic_by_LoginEntity_serialize;
    this.globalElementDeserializers['{http://datumnode.com/start/start_ip/radius}ArrayOfGet_Traffic_by_LoginEntity'] = datumnode_com_start_start_ip_radius_ArrayOfGet_Traffic_by_LoginEntity_deserialize;
    this.globalElementSerializers['{http://datumnode.com/start/start_ip/radius}Get_Srv_ListEntity'] = datumnode_com_start_start_ip_radius_Get_Srv_ListEntity_serialize;
    this.globalElementDeserializers['{http://datumnode.com/start/start_ip/radius}Get_Srv_ListEntity'] = datumnode_com_start_start_ip_radius_Get_Srv_ListEntity_deserialize;
    this.globalElementSerializers['{http://datumnode.com/start/start_ip/radius}Get_Access_SysdateOutputParameters'] = datumnode_com_start_start_ip_radius_Get_Access_SysdateOutputParameters_serialize;
    this.globalElementDeserializers['{http://datumnode.com/start/start_ip/radius}Get_Access_SysdateOutputParameters'] = datumnode_com_start_start_ip_radius_Get_Access_SysdateOutputParameters_deserialize;
    this.globalElementSerializers['{http://datumnode.com/start/start_ip/radius}ArrayOfGet_Dev_LoginEntity'] = datumnode_com_start_start_ip_radius_ArrayOfGet_Dev_LoginEntity_serialize;
    this.globalElementDeserializers['{http://datumnode.com/start/start_ip/radius}ArrayOfGet_Dev_LoginEntity'] = datumnode_com_start_start_ip_radius_ArrayOfGet_Dev_LoginEntity_deserialize;
    this.globalElementSerializers['{http://datumnode.com/start/start_ip/radius}Get_Dev_LoginOutputParameters'] = datumnode_com_start_start_ip_radius_Get_Dev_LoginOutputParameters_serialize;
    this.globalElementDeserializers['{http://datumnode.com/start/start_ip/radius}Get_Dev_LoginOutputParameters'] = datumnode_com_start_start_ip_radius_Get_Dev_LoginOutputParameters_deserialize;
    this.globalElementSerializers['{http://datumnode.com/start/start_ip/radius}Get_Sessions_by_Login_SysOutputParameters'] = datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysOutputParameters_serialize;
    this.globalElementDeserializers['{http://datumnode.com/start/start_ip/radius}Get_Sessions_by_Login_SysOutputParameters'] = datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysOutputParameters_deserialize;
    this.globalElementSerializers['{http://datumnode.com/start/start_ip/radius}Get_Dev_LoginResult'] = datumnode_com_start_start_ip_radius_Get_Dev_LoginResult_serialize;
    this.globalElementDeserializers['{http://datumnode.com/start/start_ip/radius}Get_Dev_LoginResult'] = datumnode_com_start_start_ip_radius_Get_Dev_LoginResult_deserialize;
    this.globalElementSerializers['{http://datumnode.com/start/start_ip/radius}Get_Access_by_Login_SysRequest'] = datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysRequest_serialize;
    this.globalElementDeserializers['{http://datumnode.com/start/start_ip/radius}Get_Access_by_Login_SysRequest'] = datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysRequest_deserialize;
}

function datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_op_onsuccess(client, responseXml) {
    if (client.user_onsuccess) {
     var responseObject = null;
     var element = responseXml.documentElement;
     this.jsutils.trace('responseXml: ' + this.jsutils.traceElementName(element));
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('first element child: ' + this.jsutils.traceElementName(element));
     while (!this.jsutils.isNodeNamedNS(element, 'http://schemas.xmlsoap.org/soap/envelope/', 'Body')) {
      element = this.jsutils.getNextElementSibling(element);
      if (element == null) {
       throw 'No env:Body in message.'
      }
     }
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('part element: ' + this.jsutils.traceElementName(element));
     this.jsutils.trace('calling datumnode_com_start_start_ip_radius_radius_Get_Sessions_by_Login_OutputMessage_deserializeResponse');
     responseObject = datumnode_com_start_start_ip_radius_radius_Get_Sessions_by_Login_OutputMessage_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

datumnode_com_start_start_ip_radius_radius.prototype.Get_Sessions_by_Login_onsuccess = datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_op_onsuccess;

function datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_op_onerror(client) {
    if (client.user_onerror) {
     var httpStatus;
     var httpStatusText;
     try {
      httpStatus = client.req.status;
      httpStatusText = client.req.statusText;
     } catch(e) {
      httpStatus = -1;
      httpStatusText = 'Error opening connection to server';
     }
     client.user_onerror(httpStatus, httpStatusText);
    }
}

datumnode_com_start_start_ip_radius_radius.prototype.Get_Sessions_by_Login_onerror = datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_op_onerror;

//
// Operation {http://datumnode.com/start/start_ip/radius}Get_Sessions_by_Login
// Wrapped operation.
// parameter request
// - Object constructor is datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginRequest
//
function datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_op(successCallback, errorCallback, request) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = request;
    xml = this.radius_Get_Sessions_by_Login_InputMessage_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.Get_Sessions_by_Login_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.Get_Sessions_by_Login_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = 'http://datumnode.com/start/start_ip/radius/Get_Sessions_by_Login';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

datumnode_com_start_start_ip_radius_radius.prototype.Get_Sessions_by_Login = datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_op;

function datumnode_com_start_start_ip_radius_radius_Get_Sessions_by_Login_InputMessage_serializeInput(cxfjsutils, args) {
    var wrapperObj = new datumnode_com_start_start_ip_radius_Get_Sessions_by_Login();
    wrapperObj.setRequest(args[0]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='DatumNode' xmlns:jns1='http://datumnode.com/start/start_ip/radius' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns1:Get_Sessions_by_Login', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

datumnode_com_start_start_ip_radius_radius.prototype.radius_Get_Sessions_by_Login_InputMessage_serializeInput = datumnode_com_start_start_ip_radius_radius_Get_Sessions_by_Login_InputMessage_serializeInput;

function datumnode_com_start_start_ip_radius_radius_Get_Sessions_by_Login_OutputMessage_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = datumnode_com_start_start_ip_radius_Get_Sessions_by_LoginResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function datumnode_com_start_start_ip_radius_Get_Access_by_Login_Sys_op_onsuccess(client, responseXml) {
    if (client.user_onsuccess) {
     var responseObject = null;
     var element = responseXml.documentElement;
     this.jsutils.trace('responseXml: ' + this.jsutils.traceElementName(element));
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('first element child: ' + this.jsutils.traceElementName(element));
     while (!this.jsutils.isNodeNamedNS(element, 'http://schemas.xmlsoap.org/soap/envelope/', 'Body')) {
      element = this.jsutils.getNextElementSibling(element);
      if (element == null) {
       throw 'No env:Body in message.'
      }
     }
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('part element: ' + this.jsutils.traceElementName(element));
     this.jsutils.trace('calling datumnode_com_start_start_ip_radius_radius_Get_Access_by_Login_Sys_OutputMessage_deserializeResponse');
     responseObject = datumnode_com_start_start_ip_radius_radius_Get_Access_by_Login_Sys_OutputMessage_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

datumnode_com_start_start_ip_radius_radius.prototype.Get_Access_by_Login_Sys_onsuccess = datumnode_com_start_start_ip_radius_Get_Access_by_Login_Sys_op_onsuccess;

function datumnode_com_start_start_ip_radius_Get_Access_by_Login_Sys_op_onerror(client) {
    if (client.user_onerror) {
     var httpStatus;
     var httpStatusText;
     try {
      httpStatus = client.req.status;
      httpStatusText = client.req.statusText;
     } catch(e) {
      httpStatus = -1;
      httpStatusText = 'Error opening connection to server';
     }
     client.user_onerror(httpStatus, httpStatusText);
    }
}

datumnode_com_start_start_ip_radius_radius.prototype.Get_Access_by_Login_Sys_onerror = datumnode_com_start_start_ip_radius_Get_Access_by_Login_Sys_op_onerror;

//
// Operation {http://datumnode.com/start/start_ip/radius}Get_Access_by_Login_Sys
// Wrapped operation.
// parameter request
// - Object constructor is datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysRequest
//
function datumnode_com_start_start_ip_radius_Get_Access_by_Login_Sys_op(successCallback, errorCallback, request) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = request;
    xml = this.radius_Get_Access_by_Login_Sys_InputMessage_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.Get_Access_by_Login_Sys_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.Get_Access_by_Login_Sys_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = 'http://datumnode.com/start/start_ip/radius/Get_Access_by_Login_Sys';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

datumnode_com_start_start_ip_radius_radius.prototype.Get_Access_by_Login_Sys = datumnode_com_start_start_ip_radius_Get_Access_by_Login_Sys_op;

function datumnode_com_start_start_ip_radius_radius_Get_Access_by_Login_Sys_InputMessage_serializeInput(cxfjsutils, args) {
    var wrapperObj = new datumnode_com_start_start_ip_radius_Get_Access_by_Login_Sys();
    wrapperObj.setRequest(args[0]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='DatumNode' xmlns:jns1='http://datumnode.com/start/start_ip/radius' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns1:Get_Access_by_Login_Sys', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

datumnode_com_start_start_ip_radius_radius.prototype.radius_Get_Access_by_Login_Sys_InputMessage_serializeInput = datumnode_com_start_start_ip_radius_radius_Get_Access_by_Login_Sys_InputMessage_serializeInput;

function datumnode_com_start_start_ip_radius_radius_Get_Access_by_Login_Sys_OutputMessage_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = datumnode_com_start_start_ip_radius_Get_Access_by_Login_SysResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function datumnode_com_start_start_ip_radius_Get_Traffic_by_Login_op_onsuccess(client, responseXml) {
    if (client.user_onsuccess) {
     var responseObject = null;
     var element = responseXml.documentElement;
     this.jsutils.trace('responseXml: ' + this.jsutils.traceElementName(element));
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('first element child: ' + this.jsutils.traceElementName(element));
     while (!this.jsutils.isNodeNamedNS(element, 'http://schemas.xmlsoap.org/soap/envelope/', 'Body')) {
      element = this.jsutils.getNextElementSibling(element);
      if (element == null) {
       throw 'No env:Body in message.'
      }
     }
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('part element: ' + this.jsutils.traceElementName(element));
     this.jsutils.trace('calling datumnode_com_start_start_ip_radius_radius_Get_Traffic_by_Login_OutputMessage_deserializeResponse');
     responseObject = datumnode_com_start_start_ip_radius_radius_Get_Traffic_by_Login_OutputMessage_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

datumnode_com_start_start_ip_radius_radius.prototype.Get_Traffic_by_Login_onsuccess = datumnode_com_start_start_ip_radius_Get_Traffic_by_Login_op_onsuccess;

function datumnode_com_start_start_ip_radius_Get_Traffic_by_Login_op_onerror(client) {
    if (client.user_onerror) {
     var httpStatus;
     var httpStatusText;
     try {
      httpStatus = client.req.status;
      httpStatusText = client.req.statusText;
     } catch(e) {
      httpStatus = -1;
      httpStatusText = 'Error opening connection to server';
     }
     client.user_onerror(httpStatus, httpStatusText);
    }
}

datumnode_com_start_start_ip_radius_radius.prototype.Get_Traffic_by_Login_onerror = datumnode_com_start_start_ip_radius_Get_Traffic_by_Login_op_onerror;

//
// Operation {http://datumnode.com/start/start_ip/radius}Get_Traffic_by_Login
// Wrapped operation.
// parameter request
// - Object constructor is datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginRequest
//
function datumnode_com_start_start_ip_radius_Get_Traffic_by_Login_op(successCallback, errorCallback, request) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = request;
    xml = this.radius_Get_Traffic_by_Login_InputMessage_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.Get_Traffic_by_Login_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.Get_Traffic_by_Login_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = 'http://datumnode.com/start/start_ip/radius/Get_Traffic_by_Login';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

datumnode_com_start_start_ip_radius_radius.prototype.Get_Traffic_by_Login = datumnode_com_start_start_ip_radius_Get_Traffic_by_Login_op;

function datumnode_com_start_start_ip_radius_radius_Get_Traffic_by_Login_InputMessage_serializeInput(cxfjsutils, args) {
    var wrapperObj = new datumnode_com_start_start_ip_radius_Get_Traffic_by_Login();
    wrapperObj.setRequest(args[0]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='DatumNode' xmlns:jns1='http://datumnode.com/start/start_ip/radius' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns1:Get_Traffic_by_Login', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

datumnode_com_start_start_ip_radius_radius.prototype.radius_Get_Traffic_by_Login_InputMessage_serializeInput = datumnode_com_start_start_ip_radius_radius_Get_Traffic_by_Login_InputMessage_serializeInput;

function datumnode_com_start_start_ip_radius_radius_Get_Traffic_by_Login_OutputMessage_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = datumnode_com_start_start_ip_radius_Get_Traffic_by_LoginResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function datumnode_com_start_start_ip_radius_Get_Srv_List_op_onsuccess(client, responseXml) {
    if (client.user_onsuccess) {
     var responseObject = null;
     var element = responseXml.documentElement;
     this.jsutils.trace('responseXml: ' + this.jsutils.traceElementName(element));
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('first element child: ' + this.jsutils.traceElementName(element));
     while (!this.jsutils.isNodeNamedNS(element, 'http://schemas.xmlsoap.org/soap/envelope/', 'Body')) {
      element = this.jsutils.getNextElementSibling(element);
      if (element == null) {
       throw 'No env:Body in message.'
      }
     }
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('part element: ' + this.jsutils.traceElementName(element));
     this.jsutils.trace('calling datumnode_com_start_start_ip_radius_radius_Get_Srv_List_OutputMessage_deserializeResponse');
     responseObject = datumnode_com_start_start_ip_radius_radius_Get_Srv_List_OutputMessage_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

datumnode_com_start_start_ip_radius_radius.prototype.Get_Srv_List_onsuccess = datumnode_com_start_start_ip_radius_Get_Srv_List_op_onsuccess;

function datumnode_com_start_start_ip_radius_Get_Srv_List_op_onerror(client) {
    if (client.user_onerror) {
     var httpStatus;
     var httpStatusText;
     try {
      httpStatus = client.req.status;
      httpStatusText = client.req.statusText;
     } catch(e) {
      httpStatus = -1;
      httpStatusText = 'Error opening connection to server';
     }
     client.user_onerror(httpStatus, httpStatusText);
    }
}

datumnode_com_start_start_ip_radius_radius.prototype.Get_Srv_List_onerror = datumnode_com_start_start_ip_radius_Get_Srv_List_op_onerror;

//
// Operation {http://datumnode.com/start/start_ip/radius}Get_Srv_List
// Wrapped operation.
// parameter request
// - Object constructor is datumnode_com_start_start_ip_radius_Get_Srv_ListRequest
//
function datumnode_com_start_start_ip_radius_Get_Srv_List_op(successCallback, errorCallback, request) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = request;
    xml = this.radius_Get_Srv_List_InputMessage_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.Get_Srv_List_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.Get_Srv_List_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = 'http://datumnode.com/start/start_ip/radius/Get_Srv_List';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

datumnode_com_start_start_ip_radius_radius.prototype.Get_Srv_List = datumnode_com_start_start_ip_radius_Get_Srv_List_op;

function datumnode_com_start_start_ip_radius_radius_Get_Srv_List_InputMessage_serializeInput(cxfjsutils, args) {
    var wrapperObj = new datumnode_com_start_start_ip_radius_Get_Srv_List();
    wrapperObj.setRequest(args[0]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='DatumNode' xmlns:jns1='http://datumnode.com/start/start_ip/radius' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns1:Get_Srv_List', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

datumnode_com_start_start_ip_radius_radius.prototype.radius_Get_Srv_List_InputMessage_serializeInput = datumnode_com_start_start_ip_radius_radius_Get_Srv_List_InputMessage_serializeInput;

function datumnode_com_start_start_ip_radius_radius_Get_Srv_List_OutputMessage_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = datumnode_com_start_start_ip_radius_Get_Srv_ListResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function datumnode_com_start_start_ip_radius_Stop_Radius_Session_op_onsuccess(client, responseXml) {
    if (client.user_onsuccess) {
     var responseObject = null;
     var element = responseXml.documentElement;
     this.jsutils.trace('responseXml: ' + this.jsutils.traceElementName(element));
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('first element child: ' + this.jsutils.traceElementName(element));
     while (!this.jsutils.isNodeNamedNS(element, 'http://schemas.xmlsoap.org/soap/envelope/', 'Body')) {
      element = this.jsutils.getNextElementSibling(element);
      if (element == null) {
       throw 'No env:Body in message.'
      }
     }
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('part element: ' + this.jsutils.traceElementName(element));
     this.jsutils.trace('calling datumnode_com_start_start_ip_radius_radius_Stop_Radius_Session_OutputMessage_deserializeResponse');
     responseObject = datumnode_com_start_start_ip_radius_radius_Stop_Radius_Session_OutputMessage_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

datumnode_com_start_start_ip_radius_radius.prototype.Stop_Radius_Session_onsuccess = datumnode_com_start_start_ip_radius_Stop_Radius_Session_op_onsuccess;

function datumnode_com_start_start_ip_radius_Stop_Radius_Session_op_onerror(client) {
    if (client.user_onerror) {
     var httpStatus;
     var httpStatusText;
     try {
      httpStatus = client.req.status;
      httpStatusText = client.req.statusText;
     } catch(e) {
      httpStatus = -1;
      httpStatusText = 'Error opening connection to server';
     }
     client.user_onerror(httpStatus, httpStatusText);
    }
}

datumnode_com_start_start_ip_radius_radius.prototype.Stop_Radius_Session_onerror = datumnode_com_start_start_ip_radius_Stop_Radius_Session_op_onerror;

//
// Operation {http://datumnode.com/start/start_ip/radius}Stop_Radius_Session
// Wrapped operation.
// parameter request
// - Object constructor is datumnode_com_start_start_ip_radius_Stop_Radius_SessionRequest
//
function datumnode_com_start_start_ip_radius_Stop_Radius_Session_op(successCallback, errorCallback, request) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = request;
    xml = this.radius_Stop_Radius_Session_InputMessage_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.Stop_Radius_Session_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.Stop_Radius_Session_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = 'http://datumnode.com/start/start_ip/radius/Stop_Radius_Session';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

datumnode_com_start_start_ip_radius_radius.prototype.Stop_Radius_Session = datumnode_com_start_start_ip_radius_Stop_Radius_Session_op;

function datumnode_com_start_start_ip_radius_radius_Stop_Radius_Session_InputMessage_serializeInput(cxfjsutils, args) {
    var wrapperObj = new datumnode_com_start_start_ip_radius_Stop_Radius_Session();
    wrapperObj.setRequest(args[0]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='DatumNode' xmlns:jns1='http://datumnode.com/start/start_ip/radius' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns1:Stop_Radius_Session', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

datumnode_com_start_start_ip_radius_radius.prototype.radius_Stop_Radius_Session_InputMessage_serializeInput = datumnode_com_start_start_ip_radius_radius_Stop_Radius_Session_InputMessage_serializeInput;

function datumnode_com_start_start_ip_radius_radius_Stop_Radius_Session_OutputMessage_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = datumnode_com_start_start_ip_radius_Stop_Radius_SessionResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function datumnode_com_start_start_ip_radius_Get_Access_by_Login_op_onsuccess(client, responseXml) {
    if (client.user_onsuccess) {
     var responseObject = null;
     var element = responseXml.documentElement;
     this.jsutils.trace('responseXml: ' + this.jsutils.traceElementName(element));
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('first element child: ' + this.jsutils.traceElementName(element));
     while (!this.jsutils.isNodeNamedNS(element, 'http://schemas.xmlsoap.org/soap/envelope/', 'Body')) {
      element = this.jsutils.getNextElementSibling(element);
      if (element == null) {
       throw 'No env:Body in message.'
      }
     }
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('part element: ' + this.jsutils.traceElementName(element));
     this.jsutils.trace('calling datumnode_com_start_start_ip_radius_radius_Get_Access_by_Login_OutputMessage_deserializeResponse');
     responseObject = datumnode_com_start_start_ip_radius_radius_Get_Access_by_Login_OutputMessage_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

datumnode_com_start_start_ip_radius_radius.prototype.Get_Access_by_Login_onsuccess = datumnode_com_start_start_ip_radius_Get_Access_by_Login_op_onsuccess;

function datumnode_com_start_start_ip_radius_Get_Access_by_Login_op_onerror(client) {
    if (client.user_onerror) {
     var httpStatus;
     var httpStatusText;
     try {
      httpStatus = client.req.status;
      httpStatusText = client.req.statusText;
     } catch(e) {
      httpStatus = -1;
      httpStatusText = 'Error opening connection to server';
     }
     client.user_onerror(httpStatus, httpStatusText);
    }
}

datumnode_com_start_start_ip_radius_radius.prototype.Get_Access_by_Login_onerror = datumnode_com_start_start_ip_radius_Get_Access_by_Login_op_onerror;

//
// Operation {http://datumnode.com/start/start_ip/radius}Get_Access_by_Login
// Wrapped operation.
// parameter request
// - Object constructor is datumnode_com_start_start_ip_radius_Get_Access_by_LoginRequest
//
function datumnode_com_start_start_ip_radius_Get_Access_by_Login_op(successCallback, errorCallback, request) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = request;
    xml = this.radius_Get_Access_by_Login_InputMessage_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.Get_Access_by_Login_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.Get_Access_by_Login_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = 'http://datumnode.com/start/start_ip/radius/Get_Access_by_Login';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

datumnode_com_start_start_ip_radius_radius.prototype.Get_Access_by_Login = datumnode_com_start_start_ip_radius_Get_Access_by_Login_op;

function datumnode_com_start_start_ip_radius_radius_Get_Access_by_Login_InputMessage_serializeInput(cxfjsutils, args) {
    var wrapperObj = new datumnode_com_start_start_ip_radius_Get_Access_by_Login();
    wrapperObj.setRequest(args[0]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='DatumNode' xmlns:jns1='http://datumnode.com/start/start_ip/radius' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns1:Get_Access_by_Login', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

datumnode_com_start_start_ip_radius_radius.prototype.radius_Get_Access_by_Login_InputMessage_serializeInput = datumnode_com_start_start_ip_radius_radius_Get_Access_by_Login_InputMessage_serializeInput;

function datumnode_com_start_start_ip_radius_radius_Get_Access_by_Login_OutputMessage_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = datumnode_com_start_start_ip_radius_Get_Access_by_LoginResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function datumnode_com_start_start_ip_radius_Get_Dev_Login_op_onsuccess(client, responseXml) {
    if (client.user_onsuccess) {
     var responseObject = null;
     var element = responseXml.documentElement;
     this.jsutils.trace('responseXml: ' + this.jsutils.traceElementName(element));
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('first element child: ' + this.jsutils.traceElementName(element));
     while (!this.jsutils.isNodeNamedNS(element, 'http://schemas.xmlsoap.org/soap/envelope/', 'Body')) {
      element = this.jsutils.getNextElementSibling(element);
      if (element == null) {
       throw 'No env:Body in message.'
      }
     }
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('part element: ' + this.jsutils.traceElementName(element));
     this.jsutils.trace('calling datumnode_com_start_start_ip_radius_radius_Get_Dev_Login_OutputMessage_deserializeResponse');
     responseObject = datumnode_com_start_start_ip_radius_radius_Get_Dev_Login_OutputMessage_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

datumnode_com_start_start_ip_radius_radius.prototype.Get_Dev_Login_onsuccess = datumnode_com_start_start_ip_radius_Get_Dev_Login_op_onsuccess;

function datumnode_com_start_start_ip_radius_Get_Dev_Login_op_onerror(client) {
    if (client.user_onerror) {
     var httpStatus;
     var httpStatusText;
     try {
      httpStatus = client.req.status;
      httpStatusText = client.req.statusText;
     } catch(e) {
      httpStatus = -1;
      httpStatusText = 'Error opening connection to server';
     }
     client.user_onerror(httpStatus, httpStatusText);
    }
}

datumnode_com_start_start_ip_radius_radius.prototype.Get_Dev_Login_onerror = datumnode_com_start_start_ip_radius_Get_Dev_Login_op_onerror;

//
// Operation {http://datumnode.com/start/start_ip/radius}Get_Dev_Login
// Wrapped operation.
// parameter request
// - Object constructor is datumnode_com_start_start_ip_radius_Get_Dev_LoginRequest
//
function datumnode_com_start_start_ip_radius_Get_Dev_Login_op(successCallback, errorCallback, request) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = request;
    xml = this.radius_Get_Dev_Login_InputMessage_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.Get_Dev_Login_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.Get_Dev_Login_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = 'http://datumnode.com/start/start_ip/radius/Get_Dev_Login';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

datumnode_com_start_start_ip_radius_radius.prototype.Get_Dev_Login = datumnode_com_start_start_ip_radius_Get_Dev_Login_op;

function datumnode_com_start_start_ip_radius_radius_Get_Dev_Login_InputMessage_serializeInput(cxfjsutils, args) {
    var wrapperObj = new datumnode_com_start_start_ip_radius_Get_Dev_Login();
    wrapperObj.setRequest(args[0]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='DatumNode' xmlns:jns1='http://datumnode.com/start/start_ip/radius' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns1:Get_Dev_Login', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

datumnode_com_start_start_ip_radius_radius.prototype.radius_Get_Dev_Login_InputMessage_serializeInput = datumnode_com_start_start_ip_radius_radius_Get_Dev_Login_InputMessage_serializeInput;

function datumnode_com_start_start_ip_radius_radius_Get_Dev_Login_OutputMessage_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = datumnode_com_start_start_ip_radius_Get_Dev_LoginResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function datumnode_com_start_start_ip_radius_Change_Password_op_onsuccess(client, responseXml) {
    if (client.user_onsuccess) {
     var responseObject = null;
     var element = responseXml.documentElement;
     this.jsutils.trace('responseXml: ' + this.jsutils.traceElementName(element));
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('first element child: ' + this.jsutils.traceElementName(element));
     while (!this.jsutils.isNodeNamedNS(element, 'http://schemas.xmlsoap.org/soap/envelope/', 'Body')) {
      element = this.jsutils.getNextElementSibling(element);
      if (element == null) {
       throw 'No env:Body in message.'
      }
     }
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('part element: ' + this.jsutils.traceElementName(element));
     this.jsutils.trace('calling datumnode_com_start_start_ip_radius_radius_Change_Password_OutputMessage_deserializeResponse');
     responseObject = datumnode_com_start_start_ip_radius_radius_Change_Password_OutputMessage_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

datumnode_com_start_start_ip_radius_radius.prototype.Change_Password_onsuccess = datumnode_com_start_start_ip_radius_Change_Password_op_onsuccess;

function datumnode_com_start_start_ip_radius_Change_Password_op_onerror(client) {
    if (client.user_onerror) {
     var httpStatus;
     var httpStatusText;
     try {
      httpStatus = client.req.status;
      httpStatusText = client.req.statusText;
     } catch(e) {
      httpStatus = -1;
      httpStatusText = 'Error opening connection to server';
     }
     client.user_onerror(httpStatus, httpStatusText);
    }
}

datumnode_com_start_start_ip_radius_radius.prototype.Change_Password_onerror = datumnode_com_start_start_ip_radius_Change_Password_op_onerror;

//
// Operation {http://datumnode.com/start/start_ip/radius}Change_Password
// Wrapped operation.
// parameter request
// - Object constructor is datumnode_com_start_start_ip_radius_Change_PasswordRequest
//
function datumnode_com_start_start_ip_radius_Change_Password_op(successCallback, errorCallback, request) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = request;
    xml = this.radius_Change_Password_InputMessage_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.Change_Password_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.Change_Password_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = 'http://datumnode.com/start/start_ip/radius/Change_Password';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

datumnode_com_start_start_ip_radius_radius.prototype.Change_Password = datumnode_com_start_start_ip_radius_Change_Password_op;

function datumnode_com_start_start_ip_radius_radius_Change_Password_InputMessage_serializeInput(cxfjsutils, args) {
    var wrapperObj = new datumnode_com_start_start_ip_radius_Change_Password();
    wrapperObj.setRequest(args[0]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='DatumNode' xmlns:jns1='http://datumnode.com/start/start_ip/radius' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns1:Change_Password', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

datumnode_com_start_start_ip_radius_radius.prototype.radius_Change_Password_InputMessage_serializeInput = datumnode_com_start_start_ip_radius_radius_Change_Password_InputMessage_serializeInput;

function datumnode_com_start_start_ip_radius_radius_Change_Password_OutputMessage_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = datumnode_com_start_start_ip_radius_Change_PasswordResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function datumnode_com_start_start_ip_radius_Get_Access_Sysdate_op_onsuccess(client, responseXml) {
    if (client.user_onsuccess) {
     var responseObject = null;
     var element = responseXml.documentElement;
     this.jsutils.trace('responseXml: ' + this.jsutils.traceElementName(element));
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('first element child: ' + this.jsutils.traceElementName(element));
     while (!this.jsutils.isNodeNamedNS(element, 'http://schemas.xmlsoap.org/soap/envelope/', 'Body')) {
      element = this.jsutils.getNextElementSibling(element);
      if (element == null) {
       throw 'No env:Body in message.'
      }
     }
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('part element: ' + this.jsutils.traceElementName(element));
     this.jsutils.trace('calling datumnode_com_start_start_ip_radius_radius_Get_Access_Sysdate_OutputMessage_deserializeResponse');
     responseObject = datumnode_com_start_start_ip_radius_radius_Get_Access_Sysdate_OutputMessage_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

datumnode_com_start_start_ip_radius_radius.prototype.Get_Access_Sysdate_onsuccess = datumnode_com_start_start_ip_radius_Get_Access_Sysdate_op_onsuccess;

function datumnode_com_start_start_ip_radius_Get_Access_Sysdate_op_onerror(client) {
    if (client.user_onerror) {
     var httpStatus;
     var httpStatusText;
     try {
      httpStatus = client.req.status;
      httpStatusText = client.req.statusText;
     } catch(e) {
      httpStatus = -1;
      httpStatusText = 'Error opening connection to server';
     }
     client.user_onerror(httpStatus, httpStatusText);
    }
}

datumnode_com_start_start_ip_radius_radius.prototype.Get_Access_Sysdate_onerror = datumnode_com_start_start_ip_radius_Get_Access_Sysdate_op_onerror;

//
// Operation {http://datumnode.com/start/start_ip/radius}Get_Access_Sysdate
// Wrapped operation.
// parameter request
// - Object constructor is datumnode_com_start_start_ip_radius_Get_Access_SysdateRequest
//
function datumnode_com_start_start_ip_radius_Get_Access_Sysdate_op(successCallback, errorCallback, request) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = request;
    xml = this.radius_Get_Access_Sysdate_InputMessage_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.Get_Access_Sysdate_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.Get_Access_Sysdate_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = 'http://datumnode.com/start/start_ip/radius/Get_Access_Sysdate';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

datumnode_com_start_start_ip_radius_radius.prototype.Get_Access_Sysdate = datumnode_com_start_start_ip_radius_Get_Access_Sysdate_op;

function datumnode_com_start_start_ip_radius_radius_Get_Access_Sysdate_InputMessage_serializeInput(cxfjsutils, args) {
    var wrapperObj = new datumnode_com_start_start_ip_radius_Get_Access_Sysdate();
    wrapperObj.setRequest(args[0]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='DatumNode' xmlns:jns1='http://datumnode.com/start/start_ip/radius' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns1:Get_Access_Sysdate', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

datumnode_com_start_start_ip_radius_radius.prototype.radius_Get_Access_Sysdate_InputMessage_serializeInput = datumnode_com_start_start_ip_radius_radius_Get_Access_Sysdate_InputMessage_serializeInput;

function datumnode_com_start_start_ip_radius_radius_Get_Access_Sysdate_OutputMessage_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = datumnode_com_start_start_ip_radius_Get_Access_SysdateResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_Sys_op_onsuccess(client, responseXml) {
    if (client.user_onsuccess) {
     var responseObject = null;
     var element = responseXml.documentElement;
     this.jsutils.trace('responseXml: ' + this.jsutils.traceElementName(element));
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('first element child: ' + this.jsutils.traceElementName(element));
     while (!this.jsutils.isNodeNamedNS(element, 'http://schemas.xmlsoap.org/soap/envelope/', 'Body')) {
      element = this.jsutils.getNextElementSibling(element);
      if (element == null) {
       throw 'No env:Body in message.'
      }
     }
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('part element: ' + this.jsutils.traceElementName(element));
     this.jsutils.trace('calling datumnode_com_start_start_ip_radius_radius_Get_Sessions_by_Login_Sys_OutputMessage_deserializeResponse');
     responseObject = datumnode_com_start_start_ip_radius_radius_Get_Sessions_by_Login_Sys_OutputMessage_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

datumnode_com_start_start_ip_radius_radius.prototype.Get_Sessions_by_Login_Sys_onsuccess = datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_Sys_op_onsuccess;

function datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_Sys_op_onerror(client) {
    if (client.user_onerror) {
     var httpStatus;
     var httpStatusText;
     try {
      httpStatus = client.req.status;
      httpStatusText = client.req.statusText;
     } catch(e) {
      httpStatus = -1;
      httpStatusText = 'Error opening connection to server';
     }
     client.user_onerror(httpStatus, httpStatusText);
    }
}

datumnode_com_start_start_ip_radius_radius.prototype.Get_Sessions_by_Login_Sys_onerror = datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_Sys_op_onerror;

//
// Operation {http://datumnode.com/start/start_ip/radius}Get_Sessions_by_Login_Sys
// Wrapped operation.
// parameter request
// - Object constructor is datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysRequest
//
function datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_Sys_op(successCallback, errorCallback, request) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = request;
    xml = this.radius_Get_Sessions_by_Login_Sys_InputMessage_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.Get_Sessions_by_Login_Sys_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.Get_Sessions_by_Login_Sys_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = 'http://datumnode.com/start/start_ip/radius/Get_Sessions_by_Login_Sys';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

datumnode_com_start_start_ip_radius_radius.prototype.Get_Sessions_by_Login_Sys = datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_Sys_op;

function datumnode_com_start_start_ip_radius_radius_Get_Sessions_by_Login_Sys_InputMessage_serializeInput(cxfjsutils, args) {
    var wrapperObj = new datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_Sys();
    wrapperObj.setRequest(args[0]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='DatumNode' xmlns:jns1='http://datumnode.com/start/start_ip/radius' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns1:Get_Sessions_by_Login_Sys', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

datumnode_com_start_start_ip_radius_radius.prototype.radius_Get_Sessions_by_Login_Sys_InputMessage_serializeInput = datumnode_com_start_start_ip_radius_radius_Get_Sessions_by_Login_Sys_InputMessage_serializeInput;

function datumnode_com_start_start_ip_radius_radius_Get_Sessions_by_Login_Sys_OutputMessage_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = datumnode_com_start_start_ip_radius_Get_Sessions_by_Login_SysResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function datumnode_com_start_start_ip_radius_Check_Profile_op_onsuccess(client, responseXml) {
    if (client.user_onsuccess) {
     var responseObject = null;
     var element = responseXml.documentElement;
     this.jsutils.trace('responseXml: ' + this.jsutils.traceElementName(element));
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('first element child: ' + this.jsutils.traceElementName(element));
     while (!this.jsutils.isNodeNamedNS(element, 'http://schemas.xmlsoap.org/soap/envelope/', 'Body')) {
      element = this.jsutils.getNextElementSibling(element);
      if (element == null) {
       throw 'No env:Body in message.'
      }
     }
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('part element: ' + this.jsutils.traceElementName(element));
     this.jsutils.trace('calling datumnode_com_start_start_ip_radius_radius_Check_Profile_OutputMessage_deserializeResponse');
     responseObject = datumnode_com_start_start_ip_radius_radius_Check_Profile_OutputMessage_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

datumnode_com_start_start_ip_radius_radius.prototype.Check_Profile_onsuccess = datumnode_com_start_start_ip_radius_Check_Profile_op_onsuccess;

function datumnode_com_start_start_ip_radius_Check_Profile_op_onerror(client) {
    if (client.user_onerror) {
     var httpStatus;
     var httpStatusText;
     try {
      httpStatus = client.req.status;
      httpStatusText = client.req.statusText;
     } catch(e) {
      httpStatus = -1;
      httpStatusText = 'Error opening connection to server';
     }
     client.user_onerror(httpStatus, httpStatusText);
    }
}

datumnode_com_start_start_ip_radius_radius.prototype.Check_Profile_onerror = datumnode_com_start_start_ip_radius_Check_Profile_op_onerror;

//
// Operation {http://datumnode.com/start/start_ip/radius}Check_Profile
// Wrapped operation.
// parameter request
// - Object constructor is datumnode_com_start_start_ip_radius_Check_ProfileRequest
//
function datumnode_com_start_start_ip_radius_Check_Profile_op(successCallback, errorCallback, request) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = request;
    xml = this.radius_Check_Profile_InputMessage_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.Check_Profile_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.Check_Profile_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = 'http://datumnode.com/start/start_ip/radius/Check_Profile';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

datumnode_com_start_start_ip_radius_radius.prototype.Check_Profile = datumnode_com_start_start_ip_radius_Check_Profile_op;

function datumnode_com_start_start_ip_radius_radius_Check_Profile_InputMessage_serializeInput(cxfjsutils, args) {
    var wrapperObj = new datumnode_com_start_start_ip_radius_Check_Profile();
    wrapperObj.setRequest(args[0]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='DatumNode' xmlns:jns1='http://datumnode.com/start/start_ip/radius' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns1:Check_Profile', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

datumnode_com_start_start_ip_radius_radius.prototype.radius_Check_Profile_InputMessage_serializeInput = datumnode_com_start_start_ip_radius_radius_Check_Profile_InputMessage_serializeInput;

function datumnode_com_start_start_ip_radius_radius_Check_Profile_OutputMessage_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = datumnode_com_start_start_ip_radius_Check_ProfileResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function datumnode_com_start_start_ip_radius_radius_datumnode_com_start_start_ip_radius_tcp_anonymous () {
  this.url = 'net.tcp://sdvdr002ap023.dv.rt.ru:5555/DatumNode/DatumNode.svc/a';
}
datumnode_com_start_start_ip_radius_radius_datumnode_com_start_start_ip_radius_tcp_anonymous.prototype = new datumnode_com_start_start_ip_radius_radius;
function datumnode_com_start_start_ip_radius_radius_datumnode_com_start_start_ip_radius_http () {
  this.url = 'http://sdvdr002ap023.dv.rt.ru/DatumNode/DatumNode.svc';
}
datumnode_com_start_start_ip_radius_radius_datumnode_com_start_start_ip_radius_http.prototype = new datumnode_com_start_start_ip_radius_radius;
function datumnode_com_start_start_ip_radius_radius_datumnode_com_start_start_ip_radius_pipe_anonymous () {
  this.url = 'net.pipe://sdvdr002ap023.dv.rt.ru/DatumNode/DatumNode.svc/a';
}
datumnode_com_start_start_ip_radius_radius_datumnode_com_start_start_ip_radius_pipe_anonymous.prototype = new datumnode_com_start_start_ip_radius_radius;
function datumnode_com_start_start_ip_radius_radius_datumnode_com_start_start_ip_radius_tcp () {
  this.url = 'net.tcp://sdvdr002ap023.dv.rt.ru:5555/DatumNode/DatumNode.svc';
}
datumnode_com_start_start_ip_radius_radius_datumnode_com_start_start_ip_radius_tcp.prototype = new datumnode_com_start_start_ip_radius_radius;
function datumnode_com_start_start_ip_radius_radius_datumnode_com_start_start_ip_radius_http_anonymous () {
  this.url = 'http://sdvdr002ap023.dv.rt.ru/DatumNode/DatumNode.svc/a';
}
datumnode_com_start_start_ip_radius_radius_datumnode_com_start_start_ip_radius_http_anonymous.prototype = new datumnode_com_start_start_ip_radius_radius;
function datumnode_com_start_start_ip_radius_radius_datumnode_com_start_start_ip_radius_pipe () {
  this.url = 'net.pipe://sdvdr002ap023.dv.rt.ru/DatumNode/DatumNode.svc';
}
datumnode_com_start_start_ip_radius_radius_datumnode_com_start_start_ip_radius_pipe.prototype = new datumnode_com_start_start_ip_radius_radius;
