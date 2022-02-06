import React, {useState} from 'react'
import {useFormik} from 'formik'
import apis from '../api'
import * as Yup from 'yup'

const PlayerForm = (props) => {
    let [formState, setFormState] = useState({exists: false})

    const formik = useFormik({
        initialValues: {
            player_id: props.exist ? props.playerData.player_id : '',
            name: props.exist ? props.playerData.name : '',
            nationality: props.exist ? props.playerData.nationality : '',
            overall: props.exist ? props.playerData.overall : '',
            age: props.exist ? props.playerData.age : '',
            hits: props.exist ? props.playerData.hits : '',
            potential: props.exist ? props.playerData.potential : '',
            team: props.exist ? props.playerData.team : '',

            positions: props.exist ? props.playerData.positions : '',
        },

        validationSchema: Yup.object({
            player_id: Yup.number()
                .required('Sorry, this is required.')
                .typeError('Has to be an integer.')
                .min(0, 'Cannot be negative.')
                .test('player_id-exists', 'The ID is unavailable', (value) => {
                    if (value === undefined) {
                        return false
                    }

                    apis.getPlayerById(value).then((response) => {
                        if (response.data.length > 0) {
                            setFormState({exists: false})
                        } else {
                            setFormState({exists: true})
                        }
                    })
                    return formState.exists
                }),

            name: Yup.string().required('Sorry, this is required.'),

            nationality: Yup.string().required('Sorry, this is required.'),

            positions: Yup.string().required('Sorry, this is required.'),

            overall: Yup.number()
                .required('Sorry, this is required.')
                .typeError('Has to be an integer.')
                .max(100, 'Cannot excede 100.')
                .min(0, 'Cannot precede 0.'),

            age: Yup.number()
                .required('Sorry, this is required.')
                .typeError('Has to be an integer.')
                .min(0, 'Cannot be negative.'),

            hits: Yup.number()
                .required('Sorry, this is required.')
                .typeError('Has to be an integer.')
                .min(0, 'Cannot be negative.'),

            potential: Yup.number()
                .required('Sorry, this is required.')
                .typeError('Has to be an integer.')
                .max(100, 'Cannot excede 100.')
                .min(0, 'Cannot precede 0.'),

            team: Yup.string().required('Sorry, this is required.'),
        }),

        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2))
            props.exist
                ? apis
                      .updatePlayerById(props.playerData.player_id, values)
                      .then((response) => {
                          console.log(response.data)
                      })
                : apis.insertPlayer(values).then((response) => {
                      console.log(response.data)
                  })
        },
    })

    return (
        <form className="form" onSubmit={formik.handleSubmit}>
            <div className="form-component">
                <label htmlFor="player_id">Player ID</label>
                <input
                    className="input-box"
                    id="player_id"
                    name="player_id"
                    type="text"
                    {...formik.getFieldProps('player_id')}
                />
                <div className="error">
                    {formik.errors.player_id && formik.touched.player_id ? (
                        <span>{formik.errors.player_id}</span>
                    ) : null}
                </div>
            </div>

            <div className="form-component">
                <label htmlFor="name">Player Name</label>
                <input
                    className="input-box"
                    id="name"
                    name="name"
                    type="text"
                    {...formik.getFieldProps('name')}
                />
                <div className="error">
                    {formik.errors.name && formik.touched.name ? (
                        <span>{formik.errors.name}</span>
                    ) : null}
                </div>
            </div>

            <div className="form-component">
                <label htmlFor="nationality">Country</label>
                <input
                    className="input-box"
                    id="nationality"
                    name="nationality"
                    type="text"
                    {...formik.getFieldProps('nationality')}
                />
                <div className="error">
                    {formik.errors.nationality && formik.touched.nationality ? (
                        <span>{formik.errors.nationality}</span>
                    ) : null}
                </div>
            </div>

            <div className="form-component">
                <label htmlFor="positions">Positions</label>
                <input
                    className="input-box"
                    id="positions"
                    name="positions"
                    type="text"
                    {...formik.getFieldProps('positions')}
                />
                <div className="error">
                    {formik.errors.positions && formik.touched.positions ? (
                        <span>{formik.errors.positions}</span>
                    ) : null}
                </div>
            </div>

            <div className="form-component">
                <label htmlFor="overall">Overall</label>
                <input
                    className="input-box"
                    id="overall"
                    name="overall"
                    type="text"
                    {...formik.getFieldProps('overall')}
                />
                <div className="error">
                    {formik.errors.overall && formik.touched.overall ? (
                        <span>{formik.errors.overall}</span>
                    ) : null}
                </div>
            </div>

            <div className="form-component">
                <label htmlFor="age">Age</label>
                <input
                    className="input-box"
                    id="age"
                    name="age"
                    type="text"
                    {...formik.getFieldProps('age')}
                />
                <div className="error">
                    {formik.errors.age && formik.touched.age ? (
                        <span>{formik.errors.age}</span>
                    ) : null}
                </div>
            </div>

            <div className="form-component">
                <label htmlFor="hits">Hits</label>
                <input
                    className="input-box"
                    id="hits"
                    name="hits"
                    type="text"
                    {...formik.getFieldProps('hits')}
                />
                <div className="error">
                    {formik.errors.hits && formik.touched.hits ? (
                        <span>{formik.errors.hits}</span>
                    ) : null}
                </div>
            </div>

            <div className="form-component">
                <label htmlFor="potential">Potential</label>
                <input
                    className="input-box"
                    id="potential"
                    name="potential"
                    type="text"
                    {...formik.getFieldProps('potential')}
                />
                <div className="error">
                    {formik.errors.potential && formik.touched.potential ? (
                        <span>{formik.errors.potential}</span>
                    ) : null}
                </div>
            </div>

            <div className="form-component">
                <label htmlFor="team">Team</label>
                <input
                    className="input-box"
                    id="team"
                    name="team"
                    type="text"
                    {...formik.getFieldProps('team')}
                />
                <div className="error">
                    {formik.errors.team && formik.touched.team ? (
                        <span>{formik.errors.team}</span>
                    ) : null}
                </div>
            </div>

            <button className="button" type="submit">
                Submit
            </button>
        </form>
    )
}

export default PlayerForm
