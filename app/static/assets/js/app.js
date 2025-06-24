$(document).ready(function () {
    const behaviorForm = `
        <form action="" method="post" id="form-prompt" class="form-prompt">
            <textarea name="prompt" rows="4" cols="50" placeholder="Escribe como debería actuar la IA" class="textarea-form"></textarea>
            <button type="submit" class="btn-form bi bi-arrow-up"></button>
        </form>
    `;
    $('.prompts-div').append(behaviorForm);

    // Delegado: Maneja el submit del form de comportamiento
    $(document).on('submit', '#form-prompt', function (e) {
        e.preventDefault();

        const behavior = $('textarea[name="prompt"]').val().trim();
        if (!behavior) return;

        $('#form-prompt').remove();

        const questionForm = `
            <form action="" method="post" id="form-question" class="form-prompt">
                <textarea name="question" rows="4" cols="50" placeholder="Escribe tu pregunta aquí" class="textarea-form"></textarea>
                <div style="display: flex; gap: 10px; width: 100%; justify-content: flex-end;">
                    <button type="submit" class="btn-form bi bi-arrow-up"></button>
                    <button type="button" id="btn-edit-behavior" class="btn-form bi bi-pencil-square"></button>
                </div>
            </form>
        `;
        $('.prompts-div').append(questionForm);

        $('#form-question').data('behavior', behavior);
    });

    $(document).on('click', '#btn-edit-behavior', function () {
        const currentBehavior = $('#form-question').data('behavior') || "";

        $('#form-question').remove();

        const behaviorForm = `
            <form action="" method="post" id="form-prompt" class="form-prompt">
                <textarea name="prompt" rows="4" cols="50" placeholder="Escribe como debería actuar la IA" class="textarea-form">${currentBehavior}</textarea>
                <button type="submit" class="btn-form bi bi-arrow-up"></button>
            </form>
        `;
        $('.prompts-div').append(behaviorForm);
    });

    // Manejar el submit del form de pregunta con el comportamiento + pregunta y se envia al backend en JSON
    $(document).on('submit', '#form-question', function (e) {
        e.preventDefault();

        const behavior = $('#form-question').data('behavior');
        const question = $('textarea[name="question"]').val().trim();
        if (!behavior || !question) return;

        // Desactiva ambos botones mientras espera la respuesta
        const $form = $(this);
        const $submitBtn = $form.find('button[type="submit"]');
        const $editBtn = $form.find('#btn-edit-behavior');
        $submitBtn.prop('disabled', true).addClass('disabled');
        $editBtn.prop('disabled', true).addClass('disabled');

        $.ajax({
            url: '/api/ask',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({
                behavior: behavior,
                question: question
            }),
            success: function (response) {
                $('.ia-response').remove();

                const iaResponse = `
                    <div class="ia-response">
                        <h1>Respuesta de la IA</h1>
                        <pre id="ia-response-text" style="white-space: pre-wrap;">${response.response || "Sin respuesta"}</pre>
                    </div>
                `;
                $('.main-container').append(iaResponse);

                // Reactiva los botones después de recibir la respuesta
                $submitBtn.prop('disabled', false).removeClass('disabled');
                $editBtn.prop('disabled', false).removeClass('disabled');
            },
            error: function () {
                alert('Error al enviar la solicitud.');
                // Reactiva los botones si hay error
                $submitBtn.prop('disabled', false).removeClass('disabled');
                $editBtn.prop('disabled', false).removeClass('disabled');
            }
        });
    });
});