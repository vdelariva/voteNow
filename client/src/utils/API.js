import axios from "axios";


axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
export default {
  // VoteSmart api
  apiVoteSmart: function(query) {
    return axios.get("/voteSmart", {
      params: query
    });   
  },
  // Google Civic api
  apiCivic: function(address) {
    return axios.get("/civic", {
      params: {
        address:address
      }
    });
  },
  apiListenNotes: function() {
    return axios.get("/listen");
  },
  // Database apis
  // Find voter info with the given _id
  getVoterById: function(id) {
    return axios.get(`/voter/${id}`);
  },
  // Update voter info
  updateVoter: function(id,voterData){
    return axios.put(`/voter/${id}`, voterData);
  },
  // Register voter
  registerVoter: function(voterData){
    console.log(`register `, voterData);
    return axios.post("/register", voterData);
  },
  // Login voter
  loginVoter: function(loginData){
    // console.log(`login `, loginData);
    return axios.post("/login", loginData);
  },
  // Save podcast
  savePodcast: function(podcastData,voterId){
    return axios.post(`/podcast/${podcastData.podcastId}/${voterId}`, podcastData)
  },
  // Remove podcast
  removePodcast: function(podcastId,voterId) {
    return axios.put(`/podcast/${podcastId}/${voterId}`)
  },
  // Send Email
  sendPassEmail: function(emailobj){
    console.log("sending an email to server")
    return axios.post("/sendPassEmail", emailobj)
  },
  //Reset Password
    sendChangePass: function(passobj){
    return axios.post('/passwordreset/savePass',passobj)
  },
};
