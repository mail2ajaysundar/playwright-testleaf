function empdetails(name, id, mailid, status) {
    //mailid -> default parameter - it is declared in parameter itself
    //status --> optional parameter
    if (mailid === void 0) { mailid = 'ajaysundar@ak.com'; }
    return "The employee details are ".concat(name, ": ").concat(id, " : ").concat(mailid, " : ").concat(status);
}
console.log(empdetails('ajay', 16, 'ajaysundar@tcs.com', true));
