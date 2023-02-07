export function candidateFormToReqest(candidateRequest:any): any {
  const formData = new FormData();
  formData.append('firstName', candidateRequest.firstName);
  formData.append('lastName', candidateRequest.lastName);
  formData.append('locations', candidateRequest.locations.id);
  formData.append('position', candidateRequest.position);
  formData.append('attachment', candidateRequest.attachment);
  formData.append('aboutMe', candidateRequest.aboutMe);
  return formData;
}
