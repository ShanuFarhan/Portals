import React from 'react'

const Parentportal = () => {
    return (
        <div>
            <form>
                <label>Student name:</label>
                <input type='text'></input>
                <label>Batch</label>
                <select>
                <option value="">select</option>
                    <option value="btech">Btech</option>
                    <option value="bca">BCA</option>
                    <option value="bsc">BSc Computer Science</option>
                </select>
            </form>
        </div>
    )
}

export default Parentportal
