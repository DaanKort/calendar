class App {
	constructor() {
		this.DATE_BAR = document.querySelector('#dateBar');
		this.TIMELINE = document.querySelector('#timeline');
		this.DATE_BAR_DAY_TEMPLATE = document.querySelector('#dateBarDayTemplate');
		this.TIMELINE_DAY_TEMPLATE = document.querySelector('#timelineDayTemplate');
		this.TIMELINE.appendChild(this.newTimelineDay('Monday'));
		this.fillDateBar(this.createDateArray());
	}

	fillDateBar(dateArray) {
		dateArray.forEach(date => {
			if(date.currentDay) console.log(date);
			this.DATE_BAR.appendChild(this.newDateBarDay(date.shortDay, date.date, date.currentDay));
		});
	}

	newDateBarDay(day, date, currentDay) {
		let newDay = this.DATE_BAR_DAY_TEMPLATE.cloneNode(true);
		newDay.classList.remove('hidden');
		if(currentDay) newDay.style.backgroundColor = 'blue';
		newDay.querySelector('.schedule-day__day').innerText = day;
		newDay.querySelector('.schedule-day__date').innerText = date;
		return newDay;
	}

	newTimelineDay(data) {
		let newDay = this.TIMELINE_DAY_TEMPLATE.cloneNode(true);
		newDay.classList.remove('hidden');
		newDay.innerText = data;
		return newDay;
	}

	createDateArray() {
		// The current day always has index 182 in the dateArray
		let dateArray = [];
		let dateUnix = Date.now();
		// Get 365 dates half a year before now and after now
		for(let i = -183; i < 182; i++) {
			let date = new Date(dateUnix + (i * 86400000));
			// Floor the date to 00:00:00
			date = new Date(date.getFullYear(), date.getMonth(), date.getDate());
			// Get day
			let day;
			let shortDay;
			switch(date.getDay()) {
				case 0:
					day = 'sunday';
					shortDay = 'sun';
					break;
				case 1:
					day = 'monday';
					shortDay = 'mon';
					break;
				case 2:
					day = 'tuesday';
					shortDay = 'tue';
					break;
				case 3:
					day = 'wednesday';
					shortDay = 'wed';
					break;
				case 4:
					day = 'thursday';
					shortDay = 'thur';
					break;
				case 5:
					day = 'friday';
					shortDay = 'fri';
					break;
				case 6:
					day = 'saturday';
					shortDay = 'sat';
					break;
			}
			// Get month
			let month;
			switch(date.getMonth()) {
				case 0:
					month = 'january';
					break;
				case 1:
					month = 'february';
					break;
				case 2:
					month = 'march';
					break;
				case 3:
					month = 'april';
					break;
				case 4:
					month = 'may';
					break;
				case 5:
					month = 'june';
					break;
				case 6:
					month = 'july';
					break;
				case 7:
					month = 'august';
					break;
				case 8:
					month = 'september';
					break;
				case 9:
					month = 'october';
					break;
				case 10:
					month = 'november';
					break;
				case 11:
					month = 'december';
					break;
			}
			let dateObject = {
				day,
				shortDay,
				month,
				year: date.getFullYear(),
			}
			dateObject.date = (date.getDate() >= 10) ? date.getDate() : `0${date.getDate()}`;
			dateObject.currentDay = (i === 0);
			dateArray.push(dateObject);
		}
		return dateArray;
	}
}

new App();
