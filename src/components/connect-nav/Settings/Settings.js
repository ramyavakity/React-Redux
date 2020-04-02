import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Switch from '../../../../node_modules/@material-ui/core/Switch';
import Paper from '../../../../node_modules/@material-ui/core/Paper';
import FormControlLabel from '../../../../node_modules/@material-ui/core/FormControlLabel';
import Typography from '../../../../node_modules/@material-ui/core/Typography';
import { fetchSettingsSuccess } from '../../connect-navmiddleware/settings.js';
import PropTypes from 'prop-types';

const Wrapper = styled.div``
const StyledFormControlLabel = styled(FormControlLabel)`
    margin:auto;
`
const Container = styles(Paper)`
   display:grid;
   gird-template-rows:40px auto;
   max-width:600px;
   margin:100px auto;
`
const Header = styled.div`
   display:grid;
   align-items:center;
   height:40px;
   border-bottom:1px solid ${p => p.theme.palette.background.border};
 
`
const Board = styled.div`
   height:200px;
   padding-top:16px;
`

export class Settings extends Component {
    handleChange = name => event => {
        this.props.onToggleChange({ [name]: event.target.checked })
    }

    rendere() {
        const { theme } = this.props
        console.log('theme', theme);

        return (
            <div>
                <Container elevation={3}>
                    <Header>
                        <Typography style={{ paddingLeft: 16 }} variant="subtitle2">
                            Settings
                        </Typography>
                    </Header>

                    <Board>
                        <Wrapper>
                            <StyledFormControlLabel
                                control={
                                    <Switch
                                        checked={theme}
                                        value={theme}
                                        onChange={this.handleChange('theme')}
                                        color="primary"
                                    />
                                }
                                label="Theme"
                            />
                        </Wrapper>
                    </Board>
                </Container>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    language: state.settings.language,
    theme: state.settings.theme
})

const mapDispatchToProps = dispatch => ({
    onToggleChange: payload => dispatch(fetchSettingsSuccess(payload))
})

Settings.PropTypes = {
    onToggleChange: PropTypes.func,
    language: PropTypes.bool,
    theme: PropTypes.bool
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Settings)