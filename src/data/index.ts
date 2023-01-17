//Название ключа должно начинаться с cells
export interface ITypesOfCells {
	cellsBlood: string[]
	cellsDogs: string[]
}

export type subCellsType = { name: string; subCells: string[] }

export interface ISubCellsTypes {
	cellsBlood: subCellsType
	cellsDogs: subCellsType
}

export const typesOfCells: ITypesOfCells = {
	cellsBlood: ['Monocyte', 'Lymphocyte', 'Eosinophil', 'Basophil'],
	cellsDogs: ['CellDogs1', 'CellDogs2', 'CellDogs3', 'CellDogs4', 'CellDogs5'],
}
// { [index: string]: any }

export const subCellsTypes: ISubCellsTypes = {
	cellsBlood: {
		name: 'Neutrophil',
		subCells: [
			'Myelocytes',
			'Metamyelocytes',
			'Bandnuclear',
			'Segmentednuclear',
		],
	},
	cellsDogs: { name: '', subCells: [] },
}
