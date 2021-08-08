const UPDATE_API_LIST = 'update-api-list';
const UPDATE_API_STATUS_RUNNING = 'update-api-status-running';
const UPDATE_API_STATUS_STOPPED = 'update-api-status-stopped';

export const updateApiList = data => ({ type: UPDATE_API_LIST, data });

export const updateApiStatusRunning = data => ({
    type: UPDATE_API_STATUS_RUNNING,
    data
})

export const updateApiStatusStopped = data => ({
    type: UPDATE_API_STATUS_STOPPED,
    data
})
