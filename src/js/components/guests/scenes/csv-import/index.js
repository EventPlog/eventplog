import CsvImport from './CsvImport'
import CsvImportContainer from './CsvImportContainer'
import renderComponentWithContainer from 'js/components/shared/render-props-to-component'

export default renderComponentWithContainer(CsvImportContainer, CsvImport)