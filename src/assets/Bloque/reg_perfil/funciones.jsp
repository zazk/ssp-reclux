<div class="row">
	<div class="col l12 m12 s12">
		<table id="tbl_funciones" class="display highlight striped" cellspacing="0" width="100%">
			<thead>
				<tr style="font-size: 13px;">
					<th width="70%">Funciones Principales</th>
					<th>FC</th>
					<th>CE</th>
					<th>COM</th>
					<th>Valor</th>
					<th><a id="mod_funcion" href="javascript:;" style="color: green;"><i class="fa fa-plus"  style="font-size: 18px; color: green;"></i> AGREGAR</a></th>
				</tr>
			</thead>
			<tbody style="font-size: 13px;"></tbody>			        
		</table>
	</div>
</div>

<div id="modal" class="modal modal-fixed-footer" style="max-height: 330px;">
    <div class="modal-content">
    	<h5>Agregar funciones</h5>
      	<hr>
      
      	<div class="row">
			<div class="col l8 m8 s12" style="border-right: 1px solid #c5c5c5">
	      		<div class="input-field col s12 m12">
					<textarea id="descripcion_funcion" class="materialize-textarea" rows="6"></textarea>
					<label for="textarea1">Descripcion</label>
				</div>
			</div>
			<div class="col l4 m4 s12" style="padding-top: 44px;">
	      		<div class="col l4 m4 s6">
					<label>FC</label>
					<select id="fc_funcion" class="browser-default">
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
						<option value="5">5</option>
					</select>
				</div>
				<div class="col l4 m4 s6">
					<label>CE</label>
					<select id="ce_funcion" class="browser-default">
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
						<option value="5">5</option>
					</select>
				</div>
				<div class="col l4 m4 s6">
					<label>COM</label>
					<select id="com_funcion" class="browser-default">
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
						<option value="5">5</option>
					</select>
				</div>
			</div>
      	</div>
    </div>
    <div class="modal-footer">
      <a id="funcion_add" href="#!" class="waves-effect waves-green btn-flat ">Agregar</a>
    </div>
  </div>
  
  <div id="modal_up" class="modal modal-fixed-footer" style="max-height: 330px;">
    <div class="modal-content">
    	<h5>Actualizar funciones</h5>
      	<hr>
      
      	<div class="row">
			<div class="col l8 m8 s12" style="border-right: 1px solid #c5c5c5">
	      		<input id="row_update" type="hidden">
	      		<div class="input-field col s12 m12">
					<textarea id="descripcion_funcion_up" class="materialize-textarea" rows="6" placeholder="texto"></textarea>
					<label for="textarea1">Descripcion</label>
				</div>
			</div>
			<div class="col l4 m4 s12" style="padding-top: 44px;">
	      		<div class="col l4 m4 s6">
					<label>FC</label>
					<select id="fc_funcion_up" class="browser-default">
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
						<option value="5">5</option>
					</select>
				</div>
				<div class="col l4 m4 s6">
					<label>CE</label>
					<select id="ce_funcio_up" class="browser-default">
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
						<option value="5">5</option>
					</select>
				</div>
				<div class="col l4 m4 s6">
					<label>COM</label>
					<select id="com_funcion_up" class="browser-default">
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
						<option value="5">5</option>
					</select>
				</div>
			</div>
      	</div>
    </div>
    <div class="modal-footer">
      <a id="funcion_update" href="#!" class="waves-effect waves-green btn-flat ">Actualizar</a>
    </div>
  </div>

