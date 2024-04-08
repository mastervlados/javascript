class FitnessClubService {
    // This class emulates
    // an API service and
    // getting data
    #activities = []
    #storage

    get activities() {
        return this.#activities
    }

    set activities(array) {
        this.#activities = array
    }

    get storage() {
        return this.#storage
    }

    set storage(storage) {
        this.#storage = storage
    }

    constructor(activities, storage) {
        this.#activities = activities
        this.#storage = storage
        this.#storage.initLocalStorage(activities)
    }

    _findIndexOfActivityByID = (id) => {
        return this.#activities.findIndex((activity) => activity.id === Number(id))
    }

    memberEntryAnActivity(id) {
        const index = this._findIndexOfActivityByID(id)
        const { maxNumberOfParticipants, numberOfJoinedPeople } = this.#activities[index]

        if ((numberOfJoinedPeople + 1) <= maxNumberOfParticipants) {
            this.#activities[index].numberOfJoinedPeople++
            this.#storage.saveStoredActivityById({...this.#activities[index]})
        } else {
            throw new Error('This activity is full.')
        }
    }

    memberLeaveAnActivity(id) {
        const index = this._findIndexOfActivityByID(id)
        const { numberOfJoinedPeople } = this.#activities[index]

        if ((numberOfJoinedPeople - 1) >= 0) {
            this.#activities[index].numberOfJoinedPeople--
            this.#storage.saveStoredActivityById({...this.#activities[index]})
        } else {
            throw new Error('Nobody cant leave this activity, all slots are free.')
        }
    }
}