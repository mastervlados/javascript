class FitnessClubStorageService {
    // This class works with
    // localStorage saving and getting
    // data
    initLocalStorage(activities) {
        localStorage.clear()
        for(let activity of activities) {
            const { id, ...rest } = activity
            localStorage.setItem(id, JSON.stringify(rest))
    
            const currentActivities = JSON.parse(localStorage.getItem('storedActivities'))
            if (!currentActivities) {
                localStorage.setItem('storedActivities', JSON.stringify([id]))
            } else {
                currentActivities.push(id)
                localStorage.setItem('storedActivities', JSON.stringify(currentActivities))
            }    
        }
    }
    
    saveStoredActivityById(activity) {
        const { id, ...rest } = activity
        localStorage.setItem(id, JSON.stringify(rest))
    }
    
    loadStoredActivities = () => {
        return JSON.parse(localStorage.getItem('storedActivities'))
    }
    
    loadStoredActivityById = (id) => {
        return JSON.parse(localStorage.getItem(id))
    }
}

