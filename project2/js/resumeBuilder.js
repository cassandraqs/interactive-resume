
var formattedname = HTMLheaderName.replace("%data%", "Shan Qi");
var formattedrole = HTMLheaderRole.replace("%data%", "web developer");
$("#header").append(formattedname);
$("#header").append(formattedrole);
var bio = {
	"name" : "Shan Qi",
	"role" : "web developer",
	"contacts" : {
		"mobile": "515-509-8834",
		"email": "cassandraqs@gmail.com",
		"github": "cassandraqs",
		"twitter": "@cassandra249",
		"location": "Boston, MA"
	},
	
	"welcomeMessage": "Feel free to contact me!",
	"skills" : ["html", "css","Python","Photoshop","Illustrator","watercolor","Biology"],
	"biopic" : "images/self.jpg",
	"display" : function() {
		var formattedpic = HTMLbioPic.replace("%data%", bio.biopic);
		$("#header").append(formattedpic);
		if (bio.skills.length > 0) {
			$("#header").append(HTMLskillsStart);
			for (i in bio.skills) {
				var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
				$("#skills").append(formattedSkill);
			}	
		};
		var formattedmobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
		$("#header").append(formattedmobile);
		var formattedemail = HTMLemail.replace("%data%",bio.contacts.email);
		$("#header").append(formattedemail);
		var formattedtwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
		$("#header").append(formattedtwitter);
		var formattedgithub = HTMLgithub.replace("%data%",bio.contacts.github);
		$("#header").append(formattedgithub);
		var formattedlocation = HTMLlocation.replace("%data%",bio.contacts.location);
		$("#header").append(formattedlocation);
		var formattedwelcomemsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
		$("#header").append(formattedwelcomemsg);
	}
}
bio.display();
var education = {
		"schools" : [
			{"name":"Peking University",
			"location":"Beijing, China",
			"degree":"BS",
			"majors":["life science"],
			"dates":2010
			},
			{"name":"Cornell University",
			"location":"Ithaca, NY, US",
			"degree":"MS",
			"majors":["Plant Pathology"],
			"dates":2014
			}
		],	
		"onlineCourses":[
			{
			"title":"Bioinformatics",
			"school":"Coursera",
			"dates":2015,
			"url": "https://www.coursera.org/course/bioinformatics"
			},
			{
			"title":"Front-End Web Developer nanodegree",
			"school":"Udacity",
			"dates":2015,
			"url":"https://www.udacity.com/course/nd001"

			}
		],
		"display":function() {
			for (edu in education.schools) {
				$("#education").append(HTMLschoolStart);
				var formattedschoolName = HTMLschoolName.replace("%data%",education.schools[edu].name);
				$(".education-entry:last").append(formattedschoolName);
				var formattedschoolDegree = HTMLschoolDegree.replace("%data%",education.schools[edu].degree);
				$(".education-entry:last").append(formattedschoolDegree);
				var formattedschoolDates = HTMLschoolDates.replace("%data%",education.schools[edu].dates);
				$(".education-entry:last").append(formattedschoolDates);
				var formattedschoolLocation = HTMLschoolLocation.replace("%data%",education.schools[edu].location);
				$(".education-entry:last").append(formattedschoolLocation);
				for (major in education.schools[edu].majors) {
					var formattedschoolMajor = HTMLschoolMajor.replace("%data%",education.schools[edu].majors);
					$(".education-entry:last").append(formattedschoolMajor);
				}
	
			}
			$(".education-entry:last").append(HTMLonlineClasses); 
			for (onlineclass in education.onlineCourses) {
				                                                            
				var formattedonlineTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[onlineclass].title);
				$(".education-entry:last").append(formattedonlineTitle);
				var formattedonlineSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[onlineclass].school);
				$(".education-entry:last").append(formattedonlineSchool);
				var formattedonlineDates = HTMLonlineDates.replace("%data%",education.onlineCourses[onlineclass].dates);
				$(".education-entry:last").append(formattedonlineDates);
				var formattedonlineURL = HTMLonlineURL.replace("%data%",education.onlineCourses[onlineclass].url);
				$(".education-entry:last").append(formattedonlineURL);
			}
	
		}
}

education.display();

var work = {
	"jobs" : [
		{"employer":"Cornell University",
		"title":"Research Assistant",
		"location":"Ithaca, NY, US",
		"dates":"2012 to 2014",
		"description":"Graduate Research Assistant"
		}
	],
	"display":function() {
		for (job in work.jobs) {
			$("#workExperience").append(HTMLworkStart);
			var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
			var formattedEmployerTitle = formattedEmployer + formattedTitle;
			$(".work-entry:last").append(formattedEmployerTitle);

			var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
			$(".work-entry:last").append(formattedDates);
			var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
			$(".work-entry:last").append(formattedDescription);
		}

	}

}
work.display();
var projects =	{
	"projects":[
		{"title":"MH4U armor search website",
		"dates":"Jan 2015 to Mar 2015",
		"description":"Developed a website for enabling armor search of Monster Hunter 4U",
		"images":["images/MH4U.png","images/MH4U2.png"]
		}
	],
	"display":function() {
		for (project in projects.projects) {
			$("#projects").append(HTMLprojectStart);
			var formattedprojectTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
			$(".project-entry:last").append(formattedprojectTitle);
			var formattedprojectDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
			$(".project-entry:last").append(formattedprojectDates);
			var formattedprojectDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
			$(".project-entry:last").append(formattedprojectDescription);
			if (projects.projects[project].images.length > 0) {
				for (image in projects.projects[project].images) {
					var formattedprojectImage = HTMLprojectImage.replace("%data%",projects.projects[project].images[image]);
					$(".project-entry:last").append(formattedprojectImage);
				}

			}	

		}
	}
}
projects.display();	

$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;
  logClicks(x, y);
});
$("#main").append(internationalizeButton);
var testname = "Shan Qi";
function inName(name) {
	var finalName = name;
	var arrayofstring = finalName.split(" ");
    arrayofstring[0] = (arrayofstring[0].slice(0,1)).toUpperCase() + (arrayofstring[0].slice(1)).toLowerCase();
    arrayofstring[1] = arrayofstring[1].toUpperCase();
    finalName = arrayofstring[0] + " " + arrayofstring[1];
 
    return finalName;
};
inName(testname);
$("#mapDiv").append(googleMap);