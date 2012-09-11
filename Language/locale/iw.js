﻿/* LANGUAGE 
================================================== */
if(typeof VMM != 'undefined') {
	VMM.Language = {
		lang: "iw",
		right_to_left: true,
		api: {
			wikipedia: "iw"
		},
		date: {
			month: ["ינואר", "פברואר", "מרץ", "אפריל", "מאי", "יוני", "יולי", "אוגוסט", "ספטמבר", "אוקטובר", "נובמבר", "דצמבר"],
			month_abbr: ["ינואר", "פברואר", "מרץ", "אפריל", "מאי", "יוני", "יולי", "אוגוסט", "ספטמבר", "אוקטובר", "נובמבר", "דצמבר"],
			day: ["ראשון","שני", "שלישי", "רביעי", "חמישי", "שישי", "שבת"],
			day_abbr: ["יום א'","יום ב'", "יום ג'", "יום ד'", "יום ה'", "יום ו'", "שבת"]
		}, 
		dateformats: {
			year: "yyyy",
			month_short: "mmm",
			month: "mmmm yyyy",
			full_short: "d mmm",
			full: "d mmmm,' yyyy",
			time_no_seconds_short: "h:MM TT",
			time_no_seconds_small_date: "h:MM TT'<br/><small>'mmmm d',' yyyy'</small>'",
			full_long: "d' mmm,' yyyy 'at' h:MM TT",
			full_long_small_date: "h:MM TT'<br/><small>mmm d',' yyyy'</small>'"
		},
		messages: {
			loading_timeline: "טוען את ציר הזמן... ",
			return_to_title: "חזור לכותרת",
			expand_timeline: "הרחב את ציר הזמן",
			contract_timeline: "צמצם את ציר הזמן",
			wikipedia: "מויקיפדיה, האינציקלופדיה החופשית",
			loading_content: "התוכן בטעינה...",
			loading: "טוען..."
		}
	}
}