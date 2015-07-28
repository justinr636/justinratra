$(document).ready(function() {
		// Handle Navigation / Scrolling Animations
		$("#nav li a").click(function () {
			// Highlight proper Nav Item
			// already done in Scrolling Function 
			//$("#nav li a").removeClass("active");
			//$(this).addClass("active");

			// Scroll to proper Section
			var targetOffset = $(this.hash).offset().top;
			$("html, body").animate( { scrollTop: targetOffset }, 1000);
		});

		var offsetArr = [];
		$(".section").each(function () {
			offsetArr.push($(this).offset().top);
		});

		$(window).scroll(function () {
			var position = $(window).scrollTop();

			for (var i = offsetArr.length; i > 0; i--) {
				if (position >= offsetArr[i-1]) {
					$("#nav li").removeClass("active");
					$("#nav li:nth-child(" + i + ")").addClass("active");
					break;
				}
			}
		});

		// Creates World Map
		var map = new Datamap({ 
			element: document.getElementById('world-map'),
			projection: 'mercator',
			geographyConfig: {
				popupOnHover: 'true'
			},
			fills: {
				defaultFill: 'rgb(179, 187, 177)',		// All Countries' Color
				beenFill: 'rgb(34, 210, 9)'				// Visited Countries' Color
			},
			data: {	// List of Countries I have visited
				BEL: { fillKey: "beenFill" },
				BHS: { fillKey: "beenFill" },
				CAN: { fillKey: "beenFill" },
				CHN: { fillKey: "beenFill" },
				CZE: { fillKey: "beenFill" },
				DEU: { fillKey: "beenFill" },
				ESP: { fillKey: "beenFill" },
				HKG: { fillKey: "beenFill" },
				IND: { fillKey: "beenFill" },
				JPN: { fillKey: "beenFill" },
				MYS: { fillKey: "beenFill" },
				NLD: { fillKey: "beenFill" },
				THA: { fillKey: "beenFill" },
				USA: { fillKey: "beenFill" },
				VNM: { fillKey: "beenFill" }
			}
		});
});
