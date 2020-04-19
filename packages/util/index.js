export const requiredField = val =>
    val !== 'undefined' && val !== '';


export const getFormatedDate = date => {
    let result = ''
    if (date) {
        let d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2) {
            month = '0' + month;
        }
        if (day.length < 2) {
            day = '0' + day;
        }

        result = [year, month, day].join('-');
    }
    return result
}

export const getFormatedPassport = date => {
    let result = ''
    if (date) {
        let d = new Date(date),
            month = '' + (d.getMonth() + 1),
            year = d.getFullYear();

        if (month.length < 2) {
            month = '0' + month;
        }

        result = [month, year].join('/');
    }
    return result
}

export const stringToDate = date => {
    let result = ''
    if (date) {
        let newDate = '01/'+date
        var dateParts = newDate.split("/");
        result = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0])
    }
    return result
}