$("#runModel").on('click', ()=>{
    $('#graph').load("/runModel");
});

var pop = -1;
var r0 = -1;
var i0 = -1;
var cfr = -1;
var psevere = -1;
var hl = -1;


function runModel() {
    pop = $("#pop").val();
    r0 = $("#r0").val();
    i0 = $("#i0").val();
    cfr = $("#cfr").val();
    psevere = $("#cfr").val();
    hl = $("#hl").val();

    var argStr = "";

    if(pop > 0) {
        argStr += "-population%" + pop + "%";
    }

    if(r0 > 0) {
        argStr += "-r0%" + r0 + "%";
    }

    if(i0 > 0) {
        argStr += "-i0%" + i0 + "%";
    }

    if(cfr > 0) {
        argStr += "-cfr%" + cfr + "%";
    }

    if(psevere > 0) {
        argStr += "-psevere%" + psevere + "%";
    }

    if(hl > 0) {
        argStr += "-hl%" + hl + "%";
    }
    

    $('#graph').load("/runModel" + "?args=" + argStr);
}
