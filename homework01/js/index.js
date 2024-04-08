const storageService = new FitnessClubStorageService()
const appService = new FitnessClubService(activities, storageService)

function renderSchedule() {
    const activities = storageService.loadStoredActivities()
    const timeLine = new Set()
    const scheduleCollection = new Map()

    for (let id of activities) {
        const { start, ...rest } = storageService.loadStoredActivityById(id)
        const [ date, time ] = start.split(' ')
        
        if (!scheduleCollection.has(date)) {
            // firs activity in that day
            scheduleCollection.set(date, [{ id, time, rest }])
        } else {
            // add another one
            const activitiesInThisDay = scheduleCollection.get(date)
            activitiesInThisDay.push({ id, time, rest })
            scheduleCollection.set(date, activitiesInThisDay)
        }

        timeLine.add(time)
    }

    const sortedTimeLine = [...timeLine].sort()
    const sortedScheduleCollection = new Map([...scheduleCollection.entries()].sort((a, b) => {
        const aDate = new Date(a[0])
        const bDate = new Date(b[0])

        if (aDate < bDate) {
            return -1
        }
        return 1
    }))

    const schedule = document.getElementById('schedule')

    
    schedule.innerHTML += `
        <div class="row">
            <div class="col-sm-1"></div>
        </div>`.trim()

    const fields = schedule.querySelector('.row')
    const labels = []
    let currentColumn = 0

    sortedScheduleCollection.forEach((_, date) => {
        // Current schedule 
        // can only show only 
        // three columns with activities
        if (currentColumn++ >= 3) { return }

        labels.push(date)

        fields.innerHTML += `
            <div class="col-sm-3">
                <div class="border field date-field">
                    <p>${date}</p>
                </div>
            </div>`.trim()
    })

    const emptyRows = '<div class="col-sm-3"></div>\n'.repeat(sortedTimeLine.length).trim()

    for (let time of sortedTimeLine) {
        schedule.innerHTML += `
            <div class="row">
                <div class="col-sm-1">
                    <div class="border field time-field">
                        <p>${time}</p>
                    </div>
                </div>
                ${emptyRows}
            </div>`.trim()
    }

    const scheduleGrid = document.querySelectorAll('.row')

    for (let i = 0; i < labels.length; i++) {
        const element = sortedScheduleCollection.get(labels[i])
        for (let activity of element) {
            const { id, time, rest: details } = activity
            const rowIndex = sortedTimeLine.indexOf(time) + 1
            const status = details.maxNumberOfParticipants === details.numberOfJoinedPeople
            scheduleGrid[rowIndex].querySelectorAll('.col-sm-3')[i].innerHTML = `
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${details.title}</h5>
                        <p class="card-text">
                            <i class="bi bi-people-fill"></i>
                            <span class="people-enlisted">${details.numberOfJoinedPeople}</span>
                            /
                            <span class="people-limit">${details.maxNumberOfParticipants}</span>
                        </p>
                        <button id="${id}" class="btn btn-primary btn-action" ${ status ? 'disabled' : '' }>
                            ${ status ? 'Full' : 'Enlist' }
                        </button>
                    </div>
                </div>
            `.trim()
        }
    }
}

renderSchedule()

const actionButtons = document.querySelectorAll('.btn-action')

actionButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        event.preventDefault()
        const content = button.closest('.card-body')
        // const peopleLimit = content.querySelector('.people-limit')
        const peopleEnlisted = content.querySelector('.people-enlisted')
        const actionType = button.textContent.trim()
        if (actionType === 'Enlist') { 
            peopleEnlisted.textContent++
            button.textContent = 'Abandon'
            button.className = 'btn btn-outline-primary btn-action'
            appService.memberEntryAnActivity(button.getAttribute('id'))
        } else {
            button.textContent = 'Enlist'
            button.className = 'btn btn-primary btn-action'
            peopleEnlisted.textContent--
            appService.memberLeaveAnActivity(button.getAttribute('id'))
        }
    })
})