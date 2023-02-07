import {CandidateRequest} from "./candidate";
import {Action, Selector, State, StateContext} from "@ngxs/store";
import {AddCandidate} from "./candidate.action";
import {Injectable} from "@angular/core";
import {CandidateService} from "../../services/candidate.service";
import {candidateFormToReqest} from "../../../shared/mappers/candidates-mapper";
import {tap} from "rxjs";
export class CandidatesStateModel {
  candidate!: CandidateRequest | undefined;
}

@State<CandidatesStateModel>({
  name: 'candidates',
  defaults: {
    candidate: undefined
  }
})
@Injectable()
export class CandidateState {
  constructor(private candidateService: CandidateService) {
  }

  @Selector()
  static getCandidate(state: CandidatesStateModel) {
    return state.candidate
  }

  @Action(AddCandidate)
  addCandidate({getState, setState}: StateContext<CandidatesStateModel>, {payload, id}: any) {
    const data = candidateFormToReqest(payload);
    return this.candidateService.addCandidate(data, id).pipe(
      tap(()=>{
        setState({
          candidate: payload
        })
      })
    );
  }
}
