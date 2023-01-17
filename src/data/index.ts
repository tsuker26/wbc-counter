//Название ключа должно начинаться с cells
export interface ITypesOfCells {
	cellsBlood: string[]
	cellsDogs: string[]
}

export const typesOfCells: ITypesOfCells = {
	cellsBlood: ['Monocyte', 'Lymphocyte', 'Eosinophil', 'Basophil'],
	cellsDogs: ['CellDogs1', 'CellDogs2', 'CellDogs3', 'CellDogs4', 'CellDogs5'],
}
// { [index: string]: any }
