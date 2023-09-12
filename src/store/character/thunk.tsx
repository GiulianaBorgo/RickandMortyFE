import { createAsyncThunk } from '@reduxjs/toolkit';
import { Character } from './slice';

export interface ApiData {
        info: {
                pages: number
                count: number
        },
        results: Array<Character>
}
export const GET_CHARACTERS = createAsyncThunk('characters/GET_CHARACTERS',
        async ({ value, param}: { value: number | string ; param: string }): Promise<ApiData> => {
                try {
                        const resp = await fetch(`https://rickandmortyapi.com/api/character?${param}=${value}`)
                        const data = await resp.json();
                        if (data.error) {
                               throw new Error('No se han encontrado resultados')
                              }
                        return {
                                info: data.info,
                                results: data.results,
                        }
                } catch (error) {
                        console.error('Ha ocurrido un error en la solicitud a la API:', error)
                        throw error
                }

        })

