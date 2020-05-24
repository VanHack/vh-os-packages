import React from 'react';
import { string, arrayOf, bool, number } from 'prop-types'

import VHModal from '../Modal';
import { Row } from '../../Grid'
import VHTitleDescription from '../TitleDescription';
import { formatCurrency } from '../../util'
import AreaChart from '../AreaChart';

function VHModalSalary(props) {
  const { jobTitle, salary, currency, data, openModal } = props;
  return (
    <VHModal
      maxWidth="600px"
      open={openModal}
      header={
        <Row row>
          <VHTitleDescription
            title={`Canada Salary Average - ${formatCurrency(salary, currency)}`}
            description={`Salaries offered on Vanhack for ${jobTitle} with similar experience`}
            descriptionColor="gray-50"
            descriptionVariant='h6'
            titleVariant="h3"
          />
        </Row>
      }
      content={
        <Row>
          <AreaChart data={data} />
        </Row>
      }
    >
    </VHModal>
  )

}

VHModalSalary.defaultProps = {
  openModal: false,
}

VHModalSalary.propTypes = {
  openModal: bool,
  jobTitle: string.isRequired,
  salary: number.isRequired,
  currency: string,
  data: arrayOf(number).isRequired
}

export default VHModalSalary;