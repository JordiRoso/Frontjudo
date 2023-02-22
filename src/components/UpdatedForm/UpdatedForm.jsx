<div class="container">
  <h1>Create Results</h1>
  {successMessage && <p class="alert alert-success">{successMessage}</p>}
  {errorMessage && <p class="alert alert-danger">{errorMessage}</p>}
  <form onSubmit={handleSubmit}>
    <div class="form-group">
      <label for="name">Name:</label>
      <input type="text" class="form-control" id="name" value={name} onChange={handleNameChange} />
    </div>
    <div class="form-group">
      <label for="year">Year:</label>
      <select class="form-control" id="year" value={year} onChange={handleYearChange}>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
      </select>
    </div>
    <div class="form-group">
      <label for="location">Location:</label>
      <input type="text" class="form-control" id="location" value={location} onChange={handleLocationChange} />
    </div>
    <div class="form-group">
      <label for="gender">Gender:</label>
      <select class="form-control" id="gender" value={gender} onChange={handleGenderChange}>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
    </div>
    <div class="form-group">
      <label for="category">Category:</label>
      <select class="form-control" id="category" value={category} onChange={handleCategoryChange}>
        <option value="junior">Junior</option>
        <option value="senior">Senior</option>
      </select>
    </div>
    <div class="form-group">
      <label for="-73">-73:</label>
      <div class="row">
        <div class="col">
          <input type="text" class="form-control" id="input1" placeholder="Nombre" />
        </div>
        <div class="col">
          <input type="text" class="form-control" id="input2" placeholder="Nombre" />
        </div>
        <div class="col">
          <input type="text" class="form-control" id="input3" placeholder="Nombre" />
        </div>
        <div class="col">
          <input type="text" class="form-control" id="input4" placeholder="Nombre" />
        </div>
      </div>
    </div>
    <div class="form-group">
      <label for="weight">Weight:</label>
      <select class="form-control" id="weight" value={weight} onChange={handleWeightChange}>
        {isMenCompetition ? (
          <>
            <option value="-60">-60</option>
            <option value="-66">-66</option>
            <option value="-73">-73</option>
            <option value="-81">-81</option>
            <option value="-90">-90</option>
            <option value="-100">-100</option>
            <option value="+100">+100</option>
          </>
        ) : (
          <>
            <option value="-48">-48</option>
            <option value="-52">-52</option>
            <option value="-57">-57</option>
            <option value="-63">-63</option>
            <option value="-70">-70</option>
            <option value="-78">-78</option>
            </>
        )}
        </select>
        </div>
        <div class="form-group">
    <label for="position">Position:</label>
    <select class="form-control" id="position" value={position} onChange={handlePositionChange}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="5">5</option>
        <option value="7">7</option>
        <option value="n/c">n/c</option>
    </select>
</div>

<div class="form-group">
    <label for="nameComp">Nombre Competidor:</label>
    <input type="text" class="form-control" id="nameComp" value={nameComp} onChange={handleNameCompChange} />
</div>

<div class="form-group">
    <label for="club">Club:</label>
    <input type="text" class="form-control" id="club" value={club} onChange={handleClubChange} />
</div>

<div class="form-group">
    <button type="submit" class="btn btn-primary">Crear Competicion</button>
</div>
</form>
    </div>

        
        
       


// <div>
    //   <h1>Create Results</h1>
    //   {successMessage && <p>{successMessage}</p>}
    //   {errorMessage && <p>{errorMessage}</p>}
    //   <form onSubmit={handleSubmit}>
    //     <div>
    //       <label htmlFor="name">Name:</label>
    //       <input
    //         type="text"
    //         id="name"
    //         value={name}
    //         onChange={handleNameChange}
    //       />
    //     </div>
    //     <div>
    //       <label htmlFor="year">Year:</label>
    //       <select id="year" value={year} onChange={handleYearChange}>
    //         <option value="2022">2022</option>
    //         <option value="2023">2023</option>
    //       </select>
    //     </div>
    //     <div>
    //       <label htmlFor="location">Location:</label>
    //       <input
    //         type="text"
    //         id="location"
    //         value={location}
    //         onChange={handleLocationChange}
    //       />
    //     </div>
    //     <div>
    //       <label htmlFor="gender">Gender:</label>
    //       <select id="gender" value={gender} onChange={handleGenderChange}>
    //         <option value="male">Male</option>
    //         <option value="female">Female</option>
    //       </select>
    //     </div>
    //     <div>
    //       <label htmlFor="category">Category:</label>
    //       <select
    //         id="category"
    //         value={category}
    //         onChange={handleCategoryChange}
    //       >
    //         <option value="junior">Junior</option>
    //         <option value="senior">Senior</option>
    //       </select>
    //     </div>
    //     <label htmlFor="-73">-73:</label>
    //     <div>
    //       <input type="text" id="input1" placeholder="Nombre" />
    //       <input type="text" id="input2" placeholder="Nombre" />
    //       <input type="text" id="input3" placeholder="Nombre" />
    //       <input type="text" id="input4" placeholder="Nombre" />
    //     </div>

    //     <div>
    //       <label htmlFor="weight">Weight:</label>
    //       <select id="weight" value={weight} onChange={handleWeightChange}>
    //         {isMenCompetition ? (
    //           <>
    //             <option value="-60">-60</option>
    //             <option value="-66">-66</option>
    //             <option value="-73">-73</option>
    //             <option value="-81">-81</option>
    //             <option value="-90">-90</option>
    //             <option value="-100">-100</option>
    //             <option value="+100">+100</option>
    //           </>
    //         ) : (
    //           <>
    //             <option value="-48">-48</option>
    //             <option value="-52">-52</option>
    //             <option value="-57">-57</option>
    //             <option value="-63">-63</option>
    //             <option value="-70">-70</option>
    //             <option value="-78">-78</option>
    //             <option value="+78">+78</option>
    //           </>
    //         )}
    //       </select>
    //     </div>
    //     <div>
    //       <label htmlFor="position">Position:</label>
    //       <select
    //         type="number"
    //         id="position"
    //         value={position}
    //         onChange={handlePositionChange}
    //       >
    //         <option value="1">1</option>
    //         <option value="2">2</option>
    //         <option value="3">3</option>
    //         <option value="5">5</option>
    //         <option value="7">7</option>
    //         <option value="n/c">n/c</option>
    //       </select>
    //     </div>

    //     <div>
    //       <label htmlFor="nameComp">Nombre Competidor:</label>
    //       <input
    //         type="text"
    //         id="nameComp"
    //         value={nameComp}
    //         onChange={handleNameCompChange}
    //       />
    //     </div>
    //     <div>
    //       <label htmlFor="club">Club:</label>
    //       <input
    //         type="text"
    //         id="club"
    //         value={club}
    //         onChange={handleClubChange}
    //       />
    //     </div>
    //     <button type="submit" className="btn btn-primary">
    //       Crear Competicion
    //     </button>
    //   </form>
    // </div>

