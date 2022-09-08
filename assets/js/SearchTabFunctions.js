
var airportAvailability = [];

$(document).ready(function () {

        $('[data-toggle="tooltip"]').tooltip({
            placement: 'top'
        });
    if ($('#holidaySearch').length > 0) {
        $('.searchTabModal').css('top', ($('#holidaySearch').offset().top + $('#holidaySearch').height() + 35) + 'px');

    }
    setTimeout(checkTimes, 1000);
    function checkTimes() {
        $("#CheckInDate").val(moment(startDateForPicker).format("YYYY-MM-DD"));
        $("#CheckOutDate").val(moment(endDateForPicker).format("YYYY-MM-DD"))
    }
$('#selectroom').change(function () {
    $('.roomsChild').hide();
    $('.showage').hide();
    var roomNum = $(this).val();
    $(".selectchild").each(function (index) {
        $(this).val($(this).attr('data-default'));
    });
    $('#Room' + $(this).val()).show();
    $('#Room' + $(this).val()).css("display", "flex");

});
$('.selectchildHotel').change(function () {
    //  $('.showage').hide();
    var roomDiv = $(this).closest('.roomDiv');
    $(roomDiv).children('.showage').hide();
    $('#' + $(this).val() + "Hotel").show();
});
$('.selectchildPackage').change(function () {
    //  $('.showage').hide();
    var roomDiv = $(this).closest('.roomDiv');
    $(roomDiv).children('.showage').hide();
    $('#' + $(this).val() + "Package").show();
});
$('.selectchild').change(function () {
    //  $('.showage').hide();
    var roomDiv = $(this).closest('.roomDiv');
    $(roomDiv).children('.showage').hide();
    $('#' + $(this).val()).show();
});

    $('.onchangedisplay').on("change", function (e) {
        e.preventDefault();
        let val = $(this).val();
        let id = $(this).attr('data-id');
        $('[data-group="' + id + '"]').addClass('d-none');
        $('[data-child*="' + id + '[' + val + ']"]').removeClass('d-none');
    });

    $('.selectRoom').click(function (event) {
        $('.room-dropdown').addClass('active');
    });
    $('.formbtn').click(function (event) {
        $('.room-dropdown').removeClass('active');
    });

    $(".search_tab").click(function () {
        $(".modal ").hide();
    });


    

$("#searchFormSubmit").click(function (e) {
    e.preventDefault();


    //alert(" Entering into If" + JCode);
    //if (JCode == "Holiday") {
       
    //    var DepInput = $('#selectDepartureInput').val();

    //    if (DepInput == "Choose Airport" || DepInput == "" || DepInput == null || DepInput == "Please Select Departure Airport") {

    //            $('.invalid-tooltip').attr('style', 'display:block;').fadeOut(5000);
    //            $("#selectDepartureInput").addClass('RedColor');
    //            $("#selectDepartureInput").attr('style', 'border-color:red !important');
    //            $("#DepartAirportSearchItem").focus(function () {

    //            });
            

    //            return false;
    //        }
    //}
    

    if ($('.flexdatalist').length) {
        var flexVal = $('.flexdatalist').flexdatalist('value');
        if (!jQuery.isEmptyObject(flexVal)) {
            if (flexVal.group == "Hotels") {
                $("#Hotel").val(flexVal.value);
                $("#Resort").val(flexVal.resort);
            } else {
                $("#Hotel").val("");
                $("#Resort").val(flexVal.value);
            }
        }

    }
    if ($('#noFlex').prop("checked")) {
        $('#Flexible').val('false');
    } else {
        $('#Flexible').val('true');
    }

     
    $("#SearchForm").submit();
    $("#searchFormSubmit").hide();
    $("#loadingFormBtn").show();

});



    $(".GroupCheckD").on('click', function (e) {
        var mainGroup = $(this).data("group").toString();
        if ($(this).is(':not(:checked)')) {
            $(".GroupBoxD").each(function (check) {
                if ($(this).data("group") == mainGroup) {
                    if (!$(this).is(':not(:checked)')) {
                        $(this).click();
                    }
                }

            });
        } else {
            $(".GroupBoxD").each(function (check) {
                if ($(this).data("group") == mainGroup) {
                    if ($(this).is(':not(:checked)')) {
                        $(this).click();
                    }
                }
            });
        }
    });

    $(".GroupCheckA").on('click', function (e) {
        var mainGroup = $(this).data("group").toString();
        if ($(this).is(':not(:checked)')) {
            $(".GroupBoxA").each(function (check) {
                if ($(this).data("group") == mainGroup) {
                    if (!$(this).is(':not(:checked)')) {
                        $(this).click();
                    }
                }

            });
        } else {
            $(".GroupBoxA").each(function (check) {
                if ($(this).data("group") == mainGroup) {
                    if ($(this).is(':not(:checked)')) {
                        $(this).click();
                    }
                }
            });
        }
    });

    $(".GroupBoxD").on('click', function checkBoxAll(e) {
        var mainGroup = $(this).data("group");
        var counting = 0;
        if ($(this).is(':not(:checked)')) {
            $(".GroupCheckD").each(function (e) {
                if ($(this).data("group") == mainGroup) {
                    if (!$(this).is(':not(:checked)')) {
                        if (counting < 1) {
                            $(this).click();
                            counting++;
                        }
                    }
                }
            });
        }
    });


    $(".GroupBoxA").on('click', function checkBoxAll(e) {
        var mainGroup = $(this).data("group");
        var counting = 0;
        if ($(this).is(':not(:checked)')) {
            $(".GroupCheckA").each(function (e) {
                if ($(this).data("group") == mainGroup) {
                    if (!$(this).is(':not(:checked)')) {
                        if (counting < 1) {
                            $(this).click();
                            counting++;
                        }
                    }
                }
            });
        }
    });




    $(".GroupCheckR").on('click', function (e) {
        var mainGroup = $(this).data("group").toString();
        if ($(this).is(':not(:checked)')) {
            $(".GroupBoxR").each(function (check) {
                if ($(this).data("group") == mainGroup) {
                    if (!$(this).is(':not(:checked)')) {
                        $(this).click();
                    }
                }
            });
        } else {
            $(".GroupBoxR").each(function (check) {
                if ($(this).data("group") == mainGroup) {
                    if ($(this).is(':not(:checked)')) {
                        $(this).click();
                    }
                }
            });
        }
    });

    $(".GroupBoxR").on('click', function checkBoxAll(e) {
        var mainGroup = $(this).data("group");
        var counting = 0;
        if ($(this).is(':not(:checked)')) {
            $(".GroupCheckR").each(function (e) {
                if ($(this).data("group") == mainGroup) {
                    if (!$(this).is(':not(:checked)')) {
                        if (counting < 1) {
                            $(this).click();
                            counting++;
                        }
                    }
                }
            });
        }
    });
    if (hotels) {
        $('.flexdatalist').flexdatalist({
            minLength: 1,
            valueProperty: '*',
            selectionRequired: true,
            visibleProperties: ["text", "resort"],
            searchIn: ["text", "resort"],
            searchByWord: true,
            groupBy: 'group',
            data: hotels
        });

        $('.flexdatalist-alias').attr('autocomplete', 'off');

        var flexdataAliasValue = "";
        $('.flexdatalist-alias').click(function () {
            flexdataAliasValue = $(this).val(); 
            $(this).val('');
        });

        $('.flexdatalist-alias').focusout(function () {
            if ($(this).val() == '') {
                $(this).val(flexdataAliasValue);
            };
        });
    }

   
    jQuery(function ($) {

        // $.getScript("/umbraco/api/api/GetAirportsAvailibility")
        //     .done(function (script, textStatus) {
        //         //$("#AirportScript").append(script);
        //         console.log(textStatus);
        //         airportAvailability = JSON.parse(script);
        //         //console.log(script);
        //     })
        //     .fail(function (jqxhr, settings, exception) {
        //         console.log(exception);
        //     });

        if ($('.calendar-table').text() === "") {
            if ($('#departCal').length > 0) {

                $('#departCal').daterangepicker({
                    "singleDatePicker": singleDatePicker,
                    "isInvalidDate": beforeShowDayCallback,
                    "showDropdowns": true,
                    "maxSpan": {
                        "days": 28
                    },
                    "locale": {
                        "format": "ddd D MMM YYYY",
                        "separator": " - ",
                        "applyLabel": "Apply",
                        "cancelLabel": "Cancel",
                        "fromLabel": "From",
                        "toLabel": "To",
                        "customRangeLabel": "Custom",
                        "weekLabel": "W",
                        "daysOfWeek": [
                            "Su",
                            "Mo",
                            "Tu",
                            "We",
                            "Th",
                            "Fr",
                            "Sa"
                        ],
                        "monthNames": [
                            "January",
                            "February",
                            "March",
                            "April",
                            "May",
                            "June",
                            "July",
                            "August",
                            "September",
                            "October",
                            "November",
                            "December"
                        ],
                        "firstDay": 1
                    },
                    "parentEl": ".calcalcal",
                    "startDate": startDateForPicker,
                    "endDate": endDateForPicker,
                    "minDate": moment().add(1, 'days').format('ddd D MMM YYYY'),
                    "maxDate": moment().add(1, 'years').format('ddd D MMM YYYY')
                }, function (start, end, label) {
                    $("#CheckInDate").val(start.format('YYYY-MM-DD'));
                    $("#CheckOutDate").val(end.format('YYYY-MM-DD'));
                    //console.log('New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')');
                });


            }
            $('.calIcn').click(function () {
                $('#departCal').click();
                open_modal('filterCalendarModal');
                $('.calcalcal').click();
            });


        }
    });
});

$(function () {
    return $(".modal").on("show.bs.modal", function () {
        var curModal;
        curModal = this;
        $(".modal").each(function () {
            if (this !== curModal) {
                $(this).modal("hide");
            }
        });
    });
});
$('#flex0').click(function () {
    $(".modal").each(function () {
            $(this).modal("hide");
    });
});

//var PreviousID = "";

$('.search_panel .ClickMe').on('click', function () {

    

    
    var ClickedID = $(this).attr('id');
    if ($('#' + ClickedID).hasClass('ACTIVE')) {

        $('#' + ClickedID).removeClass('ACTIVE');
        $('body').attr('style', 'overflow:auto;');
    }

    else {
        $('.ClickMe').removeClass('ACTIVE');
        $('#' + ClickedID).addClass('ACTIVE');
        $('body').attr('style', 'overflow:hidden;');


    }

    console.log(ClickedID);
});

function open_modal(target, source, liClass) {


    $('.tabPanelA').each(function () {
        $(this).addClass('active');
        $(this).addClass('whiteColor');
        $(this).removeClass('navyColorBold');
        $(this).removeClass('whiteBG');
    });

    $('.searchTabModal').each(function () {
        if ($(this).attr('id') !== $("#" + target).attr('id')) {
            $(this).removeClass('show');
            $(this).slideUp();
        } else {
        }
    });

    if (liClass && $('#' + target).hasClass('show')) {
        //$("#" + target).modal('toggle');
        $("#" + target).slideUp('fast');
        $("#" + target).modal().removeClass('show');
        $("#" + target).modal('toggle');
        $('#' + liClass).find('a.tabPanelA').addClass('active');
        $('#' + liClass).find('a.tabPanelA').addClass('whiteColor');
        $('#' + liClass).find('a.tabPanelA').removeClass('navyColorBold');
        $('#' + liClass).find('a.tabPanelA').removeClass('whiteBG');
    } else {
        if (liClass) {
            $('#' + liClass).find('a.tabPanelA').removeClass('active');
            $('#' + liClass).find('a.tabPanelA').removeClass('whiteColor');
            $('#' + liClass).find('a.tabPanelA').addClass('navyColorBold');
            $('#' + liClass).find('a.tabPanelA').addClass('whiteBG');
        }
        if ($('#' + source).offset()) {
            var topPos = $('#' + source).offset().top - (window.scrollY || window.pageYOffset || document.body.scrollTop);
            $('#' + target).css('top', (topPos + 'px'));
            $('#' + target + ' .modal-content').css('max-height', (window.innerHeight - topPos + 'px'));
            $('#' + target + ' .modal-content .model-body').css('max-height', (((window.innerHeight - topPos) - 150) + 'px'));
        }

        $('#' + target).addClass('show');
        $("#" + target).slideDown('fast');
        $("#" + target).modal('toggle');
       
    }
    $('.daterangepicker').daterangepicker({
        buttonClasses:'d-none'
    });
    
}

function ThrowSearchError(type) {
    $(".alerts").show();
    if (type == "Date") {
        $(".DateError").remove();
        $(".alerts").append('<div id="DateError" class="shadow-sm DateError container"><i class="fa fa-exclamation-circle" aria-hidden="true"></i><span class="alerts__message" aria-label="message_0"><span>Please enter a date.</span></span> </div>');
    } else if (type == "Room") {
        $(".RoomError").remove();
        $(".alerts").append('<div id="RoomError" class=" shadow-sm RoomError container"><i class="fa fa-exclamation-circle" aria-hidden="true"></i><span class="alerts__message" aria-label="message_0"><span>Please enter number of passengers.</span></span> </div>');
    }

}

function checkDate() {
    $("#filterCalendarModal").modal('toggle');
    $('body').attr('style', 'overflow:auto;')
}

function checkDepartAir() {
    var countA = 0;
    var airports = "";
    var MainAirport = "";
    $(".GroupBoxD").each(function (e) {

        if (!$(this).is(':not(:checked)')) {
            if (countA >= 1) {
                $("#selectDepartureInput").attr("value", "" + MainAirport + " + " + countA + " More");
                $("#selectDepartureInput").val(MainAirport + " + " + countA + " More");
            } else {
                MainAirport = $(this).parent().find(".overflow-control-description").text();
                $("#selectDepartureInput").attr("value", "" + MainAirport + "");
            }
            airports += $(this).val() + ",";
            countA++;
        }

    });
    if (countA < 1) {
        $("#inlineCheckboxLondonAll").click();
        $("#selectDepartureInput").attr("value", "Please Select Departure Airport");
        $("#DepartureAirports").val("");
    } else {
        airports = airports.substring(0, airports.length - 1);
        $("#DepartureAirports").val(airports);
    }
    $("#filterDepartureModalPackage").modal('toggle');
    //$.getScript("/build/AirportAvailability-2.js")
    //    .done(function (script, textStatus) {
    //        $("#AirportScript").append(script);
    //        console.log(textStatus);
    //        //console.log(script);
    //    })
    //    .fail(function (jqxhr, settings, exception) {
    //        console.log(exception);
    //    });
    $('.ClickMe').removeClass('ACTIVE', function () { $('body').attr('style', 'overflow:auto;'); });

}

function checkArrivalAir() {
    var countA = 0;
    var airports = "";
    var MainAirport = "";
    $(".GroupBoxA").each(function (e) {

        if (!$(this).is(':not(:checked)')) {
            if (countA >= 1) {
                $("#selectArrivalInput").attr("value", "" + MainAirport + " + " + countA + " More");
            } else {
                MainAirport = $(this).parent().find(".overflow-control-description").text();
                $("#selectArrivalInput").attr("value", "" + MainAirport + "");
            }
            airports += $(this).val() + ",";
            countA++;
        }

    });
    if (countA < 1) {
        $("#ArrivalAirports").val("");
    } else {
        airports = airports.substring(0, airports.length - 1);
        $("#ArrivalAirports").val(airports);
    }
    $("#filterArrivalModalPackage").modal('toggle');
    enableOverflow();
}

function enableOverflow() { $('body').attr('style', 'overflow:auto;') }
/*$('#CloseCalendar').on('click', $('body').attr('style', 'overflow:auto;'));*/

function checkRegion() {
    var countA = 0;
    var flexText = $('.flex0').val();
    var flexVal = $('.flexdatalist').flexdatalist('value');
    $('.flexdatalist').flexdatalist('value', '');
    var resort = "";
    var MainRegion = "";
    $(".GroupBoxR").each(function (e) {

        if (!$(this).is(':not(:checked)')) {
            if (countA >= 1) {
                $("#flex0").val("" + MainRegion + " + " + countA + " More");
            } else {
                MainRegion = $(this).parent().find(".overflow-control-description").text();
                $("#flex0").val("" + MainRegion + "");
            }
            resort += $(this).val() + ",";
            countA++;
        }

    });
    if (countA < 1) {
        $('.flexdatalist').flexdatalist('value', flexVal);
        $("#flex0").val(flexText)
    } else {
        resort = resort.substring(0, resort.length - 1);
        $("#Resort").val(resort);
    }
    $("#filterRegionModal").modal('toggle');
    $('body').attr('style', 'overflow:auto;');

}


function clearrooms() {
    $("#selectroom").val("1");
    $(".selectAdults").val("2");
    $(".selectchild").each(function (index) {
        $(this).val($(this).attr('data-default'));
    });
    $('.roomsChild').hide();
    $(".showage").hide();
    $("#Room1").show();
}

function AnyErrors(remove) {
    if (remove)
        $(remove).remove();
    if ($(".alerts").children().length > 0) {
        $(".alerts").show();
    } else {
        $(".alerts").hide();
    }
}
// $(document).ready(function () { checkrooms(); $("#filterRoomsModalPackage").modal('toggle'); });

function checkrooms() {
    $(".alertsRoom").hide();
    var numRooms = $("#selectroom").val();
    $("#Rooms").val(numRooms);
    var error = 0;
    $("#RoomsPax").html('');
    var AdultsNumber = 0;
    var ChildrenNumber = 0;
    for (i = 0; i < numRooms; i++) {

        var child = $("#Room" + numRooms).find(".selectchild")[i];
        var Adults = $("#Room" + numRooms).find(".selectAdults")[i];
        AdultsNumber += parseInt($(Adults).val());
        var adultsNum = "" + $(Adults).val() + "";
        var childbox = "" + $(child).val() + "";
        var numChild = childbox.split("-")[1].split("")[2];
        var numberOfChildren = parseInt(numChild);
        ChildrenNumber += numberOfChildren;
        $("#RoomsPax").append('<input type="hidden" name="R' + (i + 1) + '" value="' + adultsNum + '" />');
        for (j = 0; j < numberOfChildren; j++) {
            var selectedChildAge = $("#" + childbox).find(".form-group")[j];
            var childAge = $(selectedChildAge).children(".form-control").val();
            if (childAge == "") {
                $(".alertsRoom").show();
                error++;
            } else {
                $("#RoomsPax").append('<input type="hidden" name="R' + (i + 1) + 'C' + (j + 1) + '" value="' + childAge + '" />');
            }

        }
    }

    if (error > 0) {
        //ThrowSearchError("Room");
    } else {
        if (ChildrenNumber < 1) {
            $("#selectRoomInput").attr("value", "" + AdultsNumber + " Adults ");
        } else {
            $("#selectRoomInput").attr("value", "" + AdultsNumber + " Adults & " + ChildrenNumber + " Children");
        }
        $("#filterRoomsModal").modal('toggle');

    }

    $('body').attr('style', 'overflow:auto;');
}

function checkResortToggle() {
    $("#filterRegionModal").modal('toggle');
}
function ClearRegions() {
    $("#filterRegionModal").find("input:checkbox").each(function (e) {

        $(this).prop("checked", false);
    });

    $("#Resort").val('');
    $("#Hotel").val('');
    $("#flex0").val("Any");

    //$('input:checkbox').removeAttr('checked');
}
function ClearDepart() {
    $("#filterDepartureModalPackage").find("input:checkbox").each(function (e) {
        $(this).prop("checked", false);
    });
    //$('input:checkbox').removeAttr('checked');
    $("#selectDepartureInput").val("Please select Departure Airport");
}

function ClearArrival() {
    $("#filterArrivalModalPackage").find("input:checkbox").each(function (e) {
        $(this).prop("checked", false);
    });
    //$('input:checkbox').removeAttr('checked');
}

function getDateFormat(addDays) {
    var today = new Date();
    today.setDate(today.getDate() + addDays);
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    var day = String(today.getDay());
    return (today);
}

function DateDisableAvailable(airport, date) {
    var recfound = false;
    if (airportAvailability != null) {
        for (var index = 0; index < airportAvailability.length; index++) {
            if (airportAvailability[index].Airport == airport && airportAvailability[index].Date == date) {
                recfound = true;
            }
        }
    }
    return recfound;
}
function beforeShowDayCallback(date, airportDataId) {
    var disableDate = true;

    if ($("#DepartureAirports").length && singleDatePicker) {
        var iata = $("#DepartureAirports").val();

        var nameArr = iata.split(',');
        var currentDate = new Date(date.format('YYYY-MM-DD'));
        nameArr.forEach(function (item) {
            if (DateDisableAvailable(item, date.format('YYYY-MM-DD'))) {
                //console.log();
              
            } else {
                disableDate = false;
            }
        });

    } else {
        disableDate = false;
    }
    
    return disableDate;
}


function displayLoadingScreen(journeyType) {
    if (journeyType == "live" || journeyType == 6) {
        $(".wrapper-block-waiting .block-waiting .title").hide();
        $("#waiting-title-live").show();
        $(".dotted-line").show();
        $(".plane").show();
        $(".car").hide();
        $(".road").hide();
        $(".bus").hide();
       
        $("#waiting-title-holidays .searching-destination").text(window.cpDictionary["Common.In"] + " " + window.cpDictionary["Map.Cyprus"]);
        $('body').addClass('searching');

        setTimeout(function () { $('body').addClass('zoom'); }, 50);
    } else if (journeyType == "Hotel" || journeyType == 3) {
        $(".wrapper-block-waiting .block-waiting .title").hide();
        $("#waiting-title-hotels").show();
        $(".car").hide();
        $(".road").hide();
        $(".bus").hide();
        $(".plane").addClass("hide");
        $("Delim").removeClass("hide");
        $(".dotted-line").show();
        $('#WaitingImg').attr('src', '/assets/images/Icons/Delimeter-Green.png');
        $('#WaitingImg').attr('style', 'max-width:40px;');
        
        $("#waiting-title-hotels .searching-destination").text(window.cpDictionary["Common.In"] + " " + window.cpDictionary["Map.Cyprus"]);
        $('body').addClass('searching');

        setTimeout(function () { $('body').addClass('zoom'); }, 50);
    } else if (journeyType == "Flight" || journeyType == 'flight' || journeyType == 2) {
        $(".wrapper-block-waiting .block-waiting .title").hide();
        $(".car").addClass("hide");
        $(".road").addClass("hide");
        $(".bus").addClass("hide");
        $("#waiting-title-flights").show();
        $("#waiting-title-flights .searching-destination").text();

        $("body").addClass("searching");
        setTimeout(function () { $("body").addClass("zoom") });
    } else if (journeyType == "Transfer" || journeyType == "transfer" || journeyType == 4) {
        $(".wrapper-block-waiting .block-waiting .title").hide();
        $(".plane").hide();
        $(".car").hide();
        $(".dotted-line").hide();
        $("body").addClass("searching");
        $(".road").removeClass("hide");
        $(".bus").removeClass("hide");
        $('#Line').show();
        $('#Line').attr('style', 'padding-top:8px;');
        $("#waiting-title-transfers").show();
        $("#waiting-title-transfers .searching-destination").text(window.cpDictionary["Common.In"] + " " + window.cpDictionary["Map.Cyprus"]);


        setTimeout(function () { $("body").addClass("zoom") });
    } else if (journeyType == "carhire" || journeyType == "Carhire" || journeyType == 5) {
        $(".wrapper-block-waiting .block-waiting .title").hide();
        $(".plane").hide();
        $(".bus").hide();
        $("body").addClass("searching");
        $(".dotted-line").hide();

        $(".road").removeClass("hide");
        $(".car").removeClass("hide");
        $('#Line').show();
        $('#Line').attr('style', 'padding-top:8px;');
        $("#waiting-title-carhire").show();
        $("#waiting-title-carhire .searching-destination").text(window.cpDictionary["Common.In"] + " " + window.cpDictionary["Map.Cyprus"]);


        setTimeout(function () { $("body").addClass("zoom") });
    } else if (journeyType == "expired") {
        $(".wrapper-block-waiting .block-waiting .title").hide();
        $("#waiting-title-expired").show();
        $(".dotted-line").show();
        $(".plane").show();
        $(".car").hide();
        $(".road").hide();
        $(".bus").hide();
        $("body").addClass("searching");
        setTimeout(function () { $("body").addClass("zoom") });

    } else {
        $(".wrapper-block-waiting .block-waiting .title").hide();
        $("#waiting-title-holidays").show();
        $(".dotted-line").show();
        $(".plane").show();
        $(".car").hide();
        $(".road").hide();
        $(".bus").hide();
        $("#waiting-title-holidays .searching-destination").text(window.cpDictionary["Common.In"] + " " + window.cpDictionary["Map.Cyprus"]);

        $("body").addClass("searching");
        setTimeout(function () { $("body").addClass("zoom") });
    }
}