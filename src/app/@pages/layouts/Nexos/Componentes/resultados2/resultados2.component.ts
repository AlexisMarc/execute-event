import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigurationRestService } from '../../service/configuration.rest.service';
import { SESSION_STORAGE, WebStorageService } from 'angular-webstorage-service';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';
import { DataProfileVoterSend } from '../../interface/dataProfileVoterSend.model';
import { SocketService } from '../../service/socket.service';
import { GuardarVotoService } from '../../service/guardarvoto.service';
import { isEmpty } from 'rxjs/operators';

@Component({
  selector: 'app-resultados2',
  templateUrl: './resultados2.component.html',
  styleUrls: ['./resultados2.component.scss']
})
export class Resultados2Component implements OnInit {

  id_vote: any;
  quorumnum: number;
  quorum: string;
  id_user: any;
  code: any;
  name_vote: string;
  votes: [] = [];
  votes_show = [];
  votes_aporte = [];
  cantidad_votantes: number;
  status_vote: string;
  dato: string;
  variable = 0;
  residential_id: any;
  unidad = 0;
  asitentes: number;
  votes_options: [] = [];
  mode_chart: string;
  request_accepted: string;
  absent_save: string;
  not_voted_save: string;
  options_save: string;
  total_aportes = 0;
  absent: Array<any> = [];
  not_voted = [];
  total_votes = 0;
  ProfilesToSend: DataProfileVoterSend[] = [];
  unit_to_chart: string;
  show_results: string;
  keysession: string;
  meeting_id: any;
  estado_de_la_votacion: 1;
  bandera = sessionStorage.getItem('active_voted')

  constructor(
    private httpClient: HttpClient,
    private config: ConfigurationRestService,
    private router: Router,
    @Inject(SESSION_STORAGE)
    private storage: WebStorageService,
    private route: ActivatedRoute,
    private socketService: SocketService,
    private guardarVoto: GuardarVotoService
   
  ) {


    const userStorage = this.storage.get('usuario');
    const residentialStorage = this.storage.get('residential');
    this.show_results = residentialStorage['show_results'];
    if (this.storage.get('usuario') == null || this.storage.get('usuario') == undefined || this.storage.get('usuario') == '' ||
      this.storage.get('token') == null || this.storage.get('token') == undefined || this.storage.get('token') == '' ||
      this.storage.get('residential') == null || this.storage.get('residential') == undefined || this.storage.get('residential') == '' ||
      this.storage.get('token2') == null || this.storage.get('token2') == undefined || this.storage.get('token2') == '' ||
      this.storage.get('speaker') == null || this.storage.get('speaker') == undefined ||
      this.storage.get('observer') == null || this.storage.get('observer') == undefined ||
      this.storage.get('moroso') == null || this.storage.get('moroso') == undefined) {
      sessionStorage.clear();
      this.router.navigate(['login/' + this.residential_id]);
    }
    this.id_vote = this.route.snapshot.paramMap.get("id");
    this.id_user = userStorage['user_id'];
    this.residential_id = residentialStorage['residential_id'];
    this.keysession = this.storage.get('token2');
    this.meeting_id = residentialStorage['meeting_id'];

  

    

    this.httpClient.get(this.config.endpoint4 + 'ApiVoting/getVotingOptionResults/' + this.keysession + '/' + this.id_vote)
      .subscribe(resp => {
        if(resp['content'].length <=0){
        }else{
        if (resp['content']['vote']['status_id'] == '1' && this.show_results == '1') {
          swal.fire(
            'Mensaje',
            'La votación aún no ha finalizado',
            'info'
          );
          this.router.navigate(['home/votaciones2']);
        } else {
          this.total_votes = 0;
          this.name_vote = resp['content']['vote']['name'];
          this.votes = resp['content']['vote']['options'];
          this.absent = resp['content']['absent'];
          this.not_voted = resp['content']['not_voted'];
          this.status_vote = resp['content']['vote']['status_id'];
          this.total_votes = this.total_votes + this.not_voted['total_aporte'];
          this.unit_to_chart = resp['content']['vote']['unit_to_chart'];
          
          for (let index = 0; index < this.votes.length; index++) {
            this.total_votes = this.total_votes + this.votes[index]['total_aporte'];
          }
          if (this.status_vote == '1') {
            this.socketService.listen('vote_stored_' + this.meeting_id).subscribe((response) => {
              this.total_votes = 0;
              this.name_vote = response['vote']['name'];
              this.votes = response['vote']['options'];
              this.absent = response['absent'];
              this.not_voted = response['not_voted'];
              this.status_vote = response['vote']['status_id'];
              this.total_votes = this.total_votes + this.not_voted['total_aporte'];
              this.unit_to_chart = response['vote']['unit_to_chart'];
              for (let index = 0; index < this.votes.length; index++) {
                const element = this.votes[index];
                this.total_votes = this.total_votes + this.votes[index]['total_aporte'];
              }
            });
          }
        }
      }
      });   
  }

  ngOnInit() {

    this.socketService.listen('vote_stored_' + this.meeting_id).subscribe((response) => {
      this.total_votes = 0;
      this.name_vote = response['vote']['name'];
      this.votes = response['vote']['options'];
      this.votes_options = response['vote']['options'];
      this.absent = response['absent'];
      this.not_voted = response['not_voted'];
      this.status_vote = response['vote']['status_id'];
      this.total_votes = this.total_votes + this.not_voted['total_aporte'];
      this.unit_to_chart = response['vote']['unit_to_chart'];
      this.mode_chart = response['vote']['mode_chart'];
      this.request_accepted = response['vote']['request_accepted'];
      this.absent_save = JSON.stringify(this.absent);
      this.options_save = JSON.stringify(this.votes_options);
      this.not_voted_save = JSON.stringify(this.not_voted);
      for (let index = 0; index < this.votes.length; index++) {
        const element = this.votes[index];
        this.total_votes = this.total_votes + this.votes[index]['total_aporte'];
      }
    });

    // this.socketService.listen('meeting_quorum_' + this.meeting_id).subscribe((response) => {
    // });

  }

  ngOnDestroy() {
    this.socketService.removeListen('vote_stored_' + this.meeting_id);
  }

  Irvotaciones() {
    this.router.navigate(['home/votaciones2']);
  }
  
  socketVoted(){
    this.socketService.listen('vote_stored_' + this.meeting_id)
    .subscribe((response) => {
      this.total_votes = 0;
      this.name_vote = response['vote']['name'];
      this.votes = response['vote']['options'];
      this.absent = response['absent']['total_coefficient'];
      this.not_voted = response['not_voted'];
      this.status_vote = response['vote']['status_id'];
      this.total_votes = this.total_votes + this.not_voted['total_aporte'];
      this.unit_to_chart = response['vote']['unit_to_chart'];
      for (let index = 0; index < this.votes.length; index++) {
        const element = this.votes[index];
        this.total_votes = this.total_votes + this.votes[index]['total_aporte'];
      }
    });
  }

  tenerVotacion(){
    if(this.status_vote == 'undefined' || this.status_vote == '1'){
      swal.fire({
        title:'Votacion en curso'
      })
    }else{
    this.httpClient.get(this.config.endpoint4 + 'ApiVoting/getVotingOptionResults/' + this.keysession + '/' + this.id_vote)
 
    .subscribe(resp => {
        
      if (resp['content']['vote']['status_id'] == '1' && this.show_results == '1') {
        swal.fire(
          'Mensaje',
          'La votación aún no ha finalizado',
          'info'
        );
        this.router.navigate(['home/votaciones2']);
      } else {
        this.total_votes = 0;
        this.name_vote = resp['content']['vote']['name'];
        this.votes = resp['content']['vote']['options'];
        this.absent = resp['content']['absent'];
        this.not_voted = resp['content']['not_voted'];
        this.status_vote = resp['content']['vote']['status_id'];
        this.total_votes = this.total_votes + this.not_voted['total_aporte'];
        this.unit_to_chart = resp['content']['vote']['unit_to_chart'];
        
        for (let index = 0; index < this.votes.length; index++) {
          this.total_votes = this.total_votes + this.votes[index]['total_aporte'];
        }
        if (this.status_vote == '1') {
          this.socketService.listen('vote_stored_' + this.meeting_id).subscribe((response) => {
            this.total_votes = 0;
            this.name_vote = response['vote']['name'];
            this.votes = response['vote']['options'];
            this.absent = response['absent'];
            this.not_voted = response['not_voted'];
            this.status_vote = response['vote']['status_id'];
            this.total_votes = this.total_votes + this.not_voted['total_aporte'];
            this.unit_to_chart = response['vote']['unit_to_chart'];
            for (let index = 0; index < this.votes.length; index++) {
              const element = this.votes[index];
              this.total_votes = this.total_votes + this.votes[index]['total_aporte'];
            }
          });
        }
      }
    });
  }
}

}