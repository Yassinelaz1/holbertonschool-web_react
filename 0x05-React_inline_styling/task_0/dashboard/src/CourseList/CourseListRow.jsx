import PropTypes from 'prop-types'

export default function CourseListRow({isHeader=false, textFirstCell="", textSecondCell=null}) {
    const RowStyle = {
        backgroundColor: "#f5f5f5ab"
    }

    const HeaderRowStyle = {
        backgroundColor: "#deb5b545"
    }

    if (isHeader == true) {
        if (textSecondCell == null) {
            return (<><tr><th style={HeaderRowStyle} colSpan={2} role="cell">{textFirstCell}</th></tr></>)
        }
        else {
            return (
                <>
                    <tr>
                    <th style={HeaderRowStyle} role="cell">{textFirstCell}</th>
                    <th style={HeaderRowStyle} role="cell">{textSecondCell}</th>
                    </tr>
                </>
            )
        }
    }
    else {
        return (
            <>
                <tr>
                <td role="cell" style={RowStyle}>{textFirstCell}</td>
                <td role="cell" style={RowStyle}>{textSecondCell}</td>
                </tr>
            </>
        )
    }
}

CourseListRow.propTypes = {
    isHeader: PropTypes.bool,
    textFirstCell: PropTypes.string,
    textSecondCell: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.object])
}
