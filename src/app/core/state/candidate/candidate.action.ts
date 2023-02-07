import {CandidateRequest} from "./candidate";

export class AddCandidate {
  static readonly type = '[Candidate] Update candidate'
  constructor(public payload: CandidateRequest, public id: string){
  }
}
