import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment.dev';
import { ICharacter, IPageResponse } from '@interfaces/character.interface';
import { ICharacterRepository } from '@repositories/character.repository';


@Injectable({
    providedIn: 'root',
})
export class CharactersService implements ICharacterRepository {
    readonly baseUrl = environment.api;

    constructor(private http: HttpClient) { }

    getAllCharactersPerPage(props: any): Observable<IPageResponse> {
        return this.http.get<IPageResponse>(
            `${this.baseUrl}/character/?${props}`
        );
    }

    getCharacterById(id: number): Observable<ICharacter> {
        return this.http.get<ICharacter>(`${this.baseUrl}/character/${id}`);
    }

    getCharacterByName(name: string): Observable<IPageResponse> {
        return this.http.get<IPageResponse>(
            `${this.baseUrl}/character/?name=${name}`
        );
    }

    getMultipleCharacters(list: number[]): Observable<ICharacter[]> {
        return this.http.get<ICharacter[]>(`${this.baseUrl}/character/${list}`);
    }
}
