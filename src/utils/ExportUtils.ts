export function generateFileAndDownload(obj: any) {
    // serialize data to JSON
    var data = JSON.stringify(obj)

    // create a link element
    var c = document.createElement("a");

    // generate a filename based on timestamp
    c.download = generateFilename();

    var t = new Blob([data], {
        type: "text/json"
    });

    c.href = window.URL.createObjectURL(t);

    // start the download process
    c.click();
}

/**
 * Generates a filename for use in export functionality based on 
 * current time.
 * @returns the generated filename
 */
function generateFilename() {
    let currentData = new Date()

    let year = currentData.getFullYear()
    let day = currentData.getDate()
    let month = currentData.getMonth()
    let hour = currentData.getHours()
    let minute = currentData.getMinutes()
    let second = currentData.getSeconds()

    return `export_${year}.${day}.${month}.${hour}.${minute}.${second}.json`
}